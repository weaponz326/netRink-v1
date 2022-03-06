import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { SettingsApiService } from 'projects/school/src/app/services/modules/settings-api/settings-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  subscriptionData: any;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/settings/dashboard" },
  ];

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription(){
    this.settingsApi.getSubscription()
      .then(
        (res: any) => {
          console.log(res);
          this.subscriptionData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }


}
