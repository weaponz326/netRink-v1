import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { Invitation } from 'projects/restaurant/src/app/models/modules/admin/admin.model';



@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.scss']
})
export class ViewInvitationComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Invitations", url: "/home/admin/invitations" },
    { text: "View Invitation", url: "/home/admin/view-invitation" },
  ];

  invitationData: any;

  ngOnInit(): void {
    this.getInvitation();
  }

  getInvitation(){
    this.adminApi.getInvitation()
      .then(
        (res: any) => {
          console.log(res);
          this.invitationData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
