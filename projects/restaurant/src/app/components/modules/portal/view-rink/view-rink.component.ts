import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';

import { Account } from 'projects/restaurant/src/app/models/account/account.model';
import { Rink } from 'projects/restaurant/src/app/models/modules/portal/portal.model';


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

  restaurantId = localStorage.getItem('restaurant_id');

  senderData: Account = {uid: "", name: "", location: "", about: ""};
  recipientData: Account = {uid: "", name: "", location: "", about: ""};
  rinkData: Rink = {uid: "", sender: this.senderData, recipient: this.recipientData, rink_date: new Date, rink_type: "", rink_source: "", comment: "" };

  ngOnInit(): void {
    this.getRink();
  }

  getRink(){
    this.portalApi.getRink()
      .then(
        (res: any) => {
          console.log(res);
          this.rinkData = res;
          sessionStorage.setItem('restaurant_rink_source_id', res.rink_source)

          // // route to show rink detail
          // if (res.rink_type == "Task"){
          //   this.router.navigateByUrl('suite/suite/view-rink/task');
          // }else if(res.rink_type == "Appointment"){
          //   this.router.navigateByUrl('suite/suite/view-rink/appointment');
          // }else if(res.rink_type == "Note"){
          //   this.router.navigateByUrl('suite/suite/view-rink/note');
          // }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
