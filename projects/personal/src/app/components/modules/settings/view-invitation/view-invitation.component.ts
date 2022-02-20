import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';

import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';
import { AdminApiService as RestaurantAdminService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';


@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.scss']
})
export class ViewInvitationComponent implements OnInit {

  constructor(
    private settingsApi: SettingsApiService,
    private restaurantAdminApi: RestaurantAdminService,
  ) { }

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  invitationData: any;

  ngOnInit(): void {
  }

  openModal(data: any){
    console.log(data);
    this.invitationData = data;

    this.editButton.nativeElement.click();
  }

  acceptInvite(){
    // let invitationData = {initation_status: "Accepted"}

    // this.settingsApi.updateInvitation(invitationData)
    //   .then(
    //     (res: any) => {
    //       console.log(res);
    //     },
    //     (err: any) => {
    //       console.log(err);
    //       this.connectionToast.openToast();
    //     }
    //   )

    // this.restaurantAdminApi.updateInvitation(invitationData)
    //   .then(
    //     (res: any) => {
    //       console.log(res);
    //     },
    //     (err: any) => {
    //       console.log(err);
    //       this.connectionToast.openToast();
    //     }
    //   )
  }

}
