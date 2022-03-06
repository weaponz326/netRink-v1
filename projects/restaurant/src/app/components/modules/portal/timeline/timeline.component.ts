import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';

import { Rink } from 'projects/restaurant/src/app/models/modules/portal/portal.model';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
  ];

  restaurantId = localStorage.getItem('restaurant_id');
  rinksData: any[] = [];

  isRinksLoading = false;

  ngOnInit(): void {
    this.getAllRink();
  }

  getAllRink(){
    this.isRinksLoading = true;

    this.portalApi.getAccountRink()
      .then(
        (res: any) => {
          console.log(res);
          this.rinksData = res.docs;
          this.isRinksLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isRinksLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  viewRink(rinkId: any){
    sessionStorage.setItem('restaurant_rink_id', rinkId);
    this.router.navigateByUrl('/home/portal/view-rink');
  }

}
