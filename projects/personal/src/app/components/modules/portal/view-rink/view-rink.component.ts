import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';

import { User } from 'projects/personal/src/app/models/user/user.model';
import { Rink } from 'projects/personal/src/app/models/modules/portal/portal.model';


@Component({
  selector: 'app-view-rink',
  templateUrl: './view-rink.component.html',
  styleUrls: ['./view-rink.component.scss']
})
export class ViewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
    { text: "View Rink", url: "/home/portal/view-rink" },
  ];

  personalId = localStorage.getItem('personal_id');

  senderData: User = {uid: "", first_name: "", last_name: "", location: "", about: ""};
  recipientData: User = {uid: "", first_name: "", last_name: "", location: "", about: ""};
  rinkData: Rink = {uid: "", sender: this.senderData, recipient: this.recipientData, rink_date: new Date, rink_type: "", rink_source: "", comment: "" };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRink();
  }

  getRink(){
    this.portalApi.getRink()
      .then(
        (res: any) => {
          console.log(res);
          this.rinkData = res;
          sessionStorage.setItem('personal_rink_source_id', res.rink_source);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
