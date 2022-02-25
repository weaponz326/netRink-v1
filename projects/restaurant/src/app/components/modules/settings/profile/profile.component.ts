import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { BasicComponent } from '../profile-content/basic/basic.component';
import { LogoComponent } from '../profile-content/logo/logo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { AccountApiService } from 'projects/restaurant/src/app/services/account-api/account-api.service';
import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';

import { Account } from 'projects/restaurant/src/app/models/account/account.model';
import { ExtendedProfile } from 'projects/restaurant/src/app/models/modules/settings/settings.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private accountApi: AccountApiService,
    private settingsApi: SettingsApiService,
  ) { }

  @ViewChild('basicComponentReference') basic!: BasicComponent;
  @ViewChild('logoComponentReference') logo!: LogoComponent;
  @ViewChild('locationComponentReference') location!: LocationComponent;
  @ViewChild('contactComponentReference') contact!: ContactComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Profile", url: "/home/settings/profile" },
  ];

  accountData: any;
  extendedProfileData: any;

  ngOnInit(): void {
    this.getAccount();
    this.getExtendedProfile();
  }

  getAccount(){
    this.basic.isAccountLoading = true;
    this.location.isAccountLoading = true;

    this.accountApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.accountData = res;

          this.basic.basicForm.controls.name.setValue(this.accountData.data().name);
          this.basic.basicForm.controls.about.setValue(this.accountData.data().about);
          this.location.locationForm.controls.location.setValue(this.accountData.data().location);

          this.basic.isAccountLoading = false;
          this.location.isAccountLoading = false;
        },
        (err: any) => {
          console.log(err);

          this.basic.isAccountLoading = false;
          this.location.isAccountLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  getExtendedProfile(){
    this.location.isExtendedProfileLoading = true;
    this.contact.isExtendedProfileLoading = true;

    this.settingsApi.getExtendedProfile()
      .then(
        (res: any) => {
          console.log(res);
          this.extendedProfileData = res;

          this.location.locationForm.controls.country.setValue(this.extendedProfileData.data().country);
          this.location.locationForm.controls.state.setValue(this.extendedProfileData.data().state);
          this.location.locationForm.controls.city.setValue(this.extendedProfileData.data().city);
          this.contact.contactForm.controls.email.setValue(this.extendedProfileData.data().email);
          this.contact.contactForm.controls.phone.setValue(this.extendedProfileData.data().phone);
          this.contact.contactForm.controls.address.setValue(this.extendedProfileData.data().address);

          this.location.isExtendedProfileLoading = false;
          this.contact.isExtendedProfileLoading = false;
        },
        (err: any) => {
          console.log(err);

          this.location.isExtendedProfileLoading = false;
          this.contact.isExtendedProfileLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

}
