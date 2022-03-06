import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';

import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';
import { AccountUser, UserAccess } from 'projects/restaurant/src/app/models/modules/admin/admin.model';
import { AdminApiService as RestaurantAdminService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';


@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.scss']
})
export class ViewInvitationComponent implements OnInit {

  constructor(
    private userApi: UserApiService,
    private settingsApi: SettingsApiService,
    private restaurantAdminApi: RestaurantAdminService,
  ) { }

  @Output() updatedEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  thisUser: any;

  invitationData: any;
  isUpdating = false;

  ngOnInit(): void {
  }

  openModal(data: any){
    console.log(data);
    this.invitationData = data;

    this.editButton.nativeElement.click();
  }

  updateInvitation(choice: any){
    this.isUpdating = true;

    let data = {invitation_status: choice}

    this.settingsApi.updateInvitation(this.invitationData.id, data)
      .then(
        (res: any) => {
          console.log(res);
          this.updatedEvent.emit();
          this.editButton.nativeElement.click();
          this.isUpdating = false;
        },
        (err: any) => {
          console.log(err);
          this.isUpdating = false;
          this.connectionToast.openToast();
        }
      )

    this.restaurantAdminApi.updateInvitation(this.invitationData.data().account_invitaion, data)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    if (choice == "Accepted"){
      console.log("accepted invitation!");
      this.getUser();
    }
  }

  getUser(){
    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);
          this.thisUser = res.data();
          this.createAccountUser();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createAccountUser(){
    let userData: AccountUser = {
      created_at: serverTimestamp(),
      user: {
        id: localStorage.getItem('personal_id') as string,
        data: this.thisUser,
      },
      access_level: "Staff",
      account: {
        id: this.invitationData.data().account.id,
        data: this.invitationData.data().account.data,
      }
    }

    this.restaurantAdminApi.createAccountUser(userData)
      .then(
        (res: any) => {
          console.log(res);
          this.createUserAccess(res.id);
        },
        (err: any) => {
          console.log(err)
          this.connectionToast.openToast();
        }
      )
  }

  createUserAccess(accountUserId: any){
    let accessData: UserAccess = {
      admin_access: false,
      customers_access: false,
      deliveries_access: false,
      kitchen_stock_access: false,
      menu_access: false,
      orders_access: false,
      payments_access: false,
      portal_access: false,
      roster_access: false,
      settings_access: false,
      staff_access: false,
      reservations_access: false,
      tables_access: false,
    }

    this.restaurantAdminApi.createUserAccess(accountUserId, accessData)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err)
          this.connectionToast.openToast();
        }
      )
  }

}
