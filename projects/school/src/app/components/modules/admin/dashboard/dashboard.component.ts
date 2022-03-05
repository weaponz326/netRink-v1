import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { AdminApiService } from 'projects/school/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/portal/dashboard" },
  ];

  allUsersCount: number = 0;

  sortParams = {
    field: "access_level",
    direction: "asc"
  }

  ngOnInit(): void {
    this.getAccountAccountUser()
  }

  getAccountAccountUser() {
    this.adminApi.getAccountAccountUser(this.sortParams)
      .then(
        (res: any) => {
          console.log(res);
          this.allUsersCount = res.docs.length;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
