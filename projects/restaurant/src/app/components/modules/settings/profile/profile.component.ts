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

  accountData: Account = {uid: "", name: "", location: "", about: ""};
  extendedProfileData: ExtendedProfile = {uid: "", phone: "", address: "", country: "", state: "", city: ""};

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccount();
    this.getExtendedProfile();
  }

  getAccount(){
    this.accountApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);

          this.accountData = res;

          this.basic.basicForm.controls.name.setValue(this.accountData.name);
          this.basic.basicForm.controls.about.setValue(this.accountData.about);
          this.location.locationForm.controls.location.setValue(this.accountData.location);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getExtendedProfile(){
    this.settingsApi.getExtendedProfile()
      .then(
        (res: any) => {
          console.log(res);

          this.extendedProfileData = res;

          this.location.locationForm.controls.country.setValue(this.extendedProfileData.country);
          this.location.locationForm.controls.state.setValue(this.extendedProfileData.state);
          this.location.locationForm.controls.city.setValue(this.extendedProfileData.city);
          this.contact.contactForm.controls.phone.setValue(this.extendedProfileData.phone);
          this.contact.contactForm.controls.address.setValue(this.extendedProfileData.address);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateAccount(){
    let data: Account = {
      uid: this.accountData.uid,
      name: this.basic.basicForm.controls.name.value,
      location: this.location.locationForm.controls.location.value,
      about: this.basic.basicForm.controls.about.value,
    }

    this.basic.isBasicSaving = true;
    this.logo.isLogoSaving = true;

    this.accountApi.updateAccount(data)
      .then(
        (res: any) => {
          console.log(res);

          this.basic.isBasicSaving = false;
          this.logo.isLogoSaving = false;
        },
        (err: any) => {
          console.log(err);

          this.basic.isBasicSaving = false;
          this.logo.isLogoSaving = false;

          this.connectionToast.openToast();
        }
      )
  }

  // extended profile
  updateExtendedProfile(){
    let data: ExtendedProfile = {
      uid: this.extendedProfileData.uid,
      phone: this.contact.contactForm.controls.phone.value,
      address: this.contact.contactForm.controls.address.value,
      country: this.location.locationForm.controls.country.value,
      state: this.location.locationForm.controls.state.value,
      city: this.location.locationForm.controls.city.value,
    }

    this.location.isLocationSaving = true;
    this.contact.isContactSaving = true;

    this.settingsApi.updateExtendedProfile(data)
      .then(
        res => {
          console.log(res);

          this.location.isLocationSaving = false;
          this.contact.isContactSaving = false;
        },
        err => {
          console.log(err);

          this.location.isLocationSaving = false;
          this.contact.isContactSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}
