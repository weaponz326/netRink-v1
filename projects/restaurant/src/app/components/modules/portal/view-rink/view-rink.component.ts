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

  senderData: any;
  recipientData: any;
  rinkData: any;

  isRinkLoading = false;

  ngOnInit(): void {
    this.getRink();
  }

  getRink(){
    this.isRinkLoading = true;

    this.portalApi.getRink()
      .then(
        (res: any) => {
          console.log(res);
          this.rinkData = res;
          sessionStorage.setItem('restaurant_rink_source_id', res.data().rink_source)
          this.isRinkLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isRinkLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

}
