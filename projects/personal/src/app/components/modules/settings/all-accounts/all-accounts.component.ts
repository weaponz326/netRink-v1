import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { AuthApiService } from 'projects/personal/src/app/services/user/auth-api/auth-api.service';
import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { User } from 'projects/personal/src/app/models/user/user.model';

import { environment } from 'projects/personal/src/environments/environment'


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private userApi: UserApiService,
    private settingsApi: SettingsApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/profile/all-accounts" },
  ];

  userData: any;

  restaurantData: any = [];
  schoolData: any = [];
  enterpriseData: any = [];
  associationData: any = [];
  hospitalData: any = [];
  hotelData: any = [];
  shopData: any = [];
  productionData: any = [];

  suiteUrls = [
    environment.restaurantUrl,
    environment.schoolUrl,
    environment.enterpriseUrl,
    environment.associationUrl,
    environment.hospitalUrl,
    environment.hotelUrl,
    environment.shopUrl,
    environment.productionUrl,
  ]

  suiteData = [
    this.restaurantData,
    this.schoolData,
    this.enterpriseData,
    this.associationData,
    this.hospitalData,
    this.hotelData,
    this.shopData,
    this.productionData,
  ]

  suiteNames = [
    'Restaurant',
    'School',
    'Enterprise',
    'Association',
    'Hospital',
    'Hotel',
    'Shop',
    'Production',
  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // TODO: this getAuth();
    this.getUser();
    this.getSuiteAccounts();
  }

  getUser(){
    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);
          this.userData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSuiteAccounts(){
    // this.suiteUrls.forEach((url, index) => {
    //   this.settingsApi.getUserAccounts(url)
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //         this.suiteData[index] = res;
    //       },
    //       err => {
    //         console.log(err);
    //         this.connectionToast.openToast();
    //       }
    //     )
    // });

    // this.suiteData.forEach((suite) => console.log(suite));
  }

}
