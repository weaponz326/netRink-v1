import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  thisUser: any;

  invitationData: any;

  ngOnInit(): void {
  }

  openModal(data: any){
    console.log(data);
    this.invitationData = data;

    this.editButton.nativeElement.click();
  }

  acceptInvitation(){
    this.getUser();
    this.updateInvitation();
    this.createAccountUser();
  }

  getUser(){
    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);
          this.thisUser = res.data();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateInvitation(){
    let data = {invitation_status: "Accepted"}

    this.settingsApi.updateInvitation(this.invitationData.data().invitation_id, data)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
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
  }

  createAccountUser(){
    let userData: AccountUser = {
      user: {
        id: localStorage.getItem('personal_id') as string,
        data: this.thisUser,
      },
      access_level: "Admin",
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
      admin_access: true,
      customers_access: true,
      deliveries_access: true,
      kitchen_stock_access: true,
      menu_access: true,
      orders_access: true,
      payments_access: true,
      portal_access: true,
      roster_access: true,
      settings_access: true,
      staff_access: true,
      reservations_access: true,
      tables_access: true,
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
