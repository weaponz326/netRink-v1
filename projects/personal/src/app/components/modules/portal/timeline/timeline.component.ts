import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';

import { Rink } from 'projects/personal/src/app/models/modules/portal/portal.model';


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

  personalId = localStorage.getItem('personal_id');
  rinksData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllRink();
  }

  getAllRink(){
    this.portalApi.getAllRink(20, {})
      .then(
        (res: any) => {
          console.log(res);
          this.rinksData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewRink(rinkId: any){
    sessionStorage.setItem('personal_rink_id', rinkId);
    this.router.navigateByUrl('/home/portal/view-rink');
  }

}
