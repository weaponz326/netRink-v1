import { Component, OnInit, ViewChild } from '@angular/core';

import { BasicComponent } from '../profile-content/basic/basic.component';
import { AdditionalComponent } from '../profile-content/additional/additional.component';
import { PhotoComponent } from '../profile-content/photo/photo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { AuthApiService } from 'projects/personal/src/app/services/user/auth-api/auth-api.service';
import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';

import { User } from 'projects/personal/src/app/models/user/user.model';
import { ExtendedProfile } from 'projects/personal/src/app/models/modules/settings/settings.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private userApi: UserApiService,
    private settingsApi: SettingsApiService,
  ) { }

  @ViewChild('basicComponentReference') basic!: BasicComponent;
  @ViewChild('additionalComponentReference') additional!: AdditionalComponent;
  @ViewChild('photoComponentReference') photo!: PhotoComponent;
  @ViewChild('locationComponentReference') location!: LocationComponent;
  @ViewChild('contactComponentReference') contact!: ContactComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Profile", url: "/home/profile/dashboard" },
  ];

  userData: any;
  extendedProfileData: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAuth();
    this.getUser();
    this.getExtendedProfile();
  }

  getAuth(){
    this.contact.isAuthLoading = true;

    this.authApi.getAuth()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.contact.contactForm.controls.email.setValue(res.email);
          this.contact.isAuthLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getUser(){
    this.basic.isUserLoading = true;
    this.location.isUserLoading = true;

    this.userApi.getUser()
      .then(
        (res: any) => {
          console.log(res);

          this.userData = res;

          this.basic.basicForm.controls.firstName.setValue(this.userData.data().first_name);
          this.basic.basicForm.controls.lastName.setValue(this.userData.data().last_name);
          this.basic.basicForm.controls.about.setValue(this.userData.data().about);
          this.location.locationForm.controls.location.setValue(this.userData.data().location);

          this.basic.isUserLoading = false;
          this.location.isUserLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getExtendedProfile(){
    this.additional.isExtendedProfileLoading = true;
    this.location.isExtendedProfileLoading = true;
    this.contact.isExtendedProfileLoading = true;

    this.settingsApi.getExtendedProfile()
      .then(
        (res: any) => {
          console.log(res);

          this.extendedProfileData = res;

          this.additional.bdayInput.value = this.extendedProfileData.date_of_birth;
          this.additional.additionalForm.controls.gender.setValue(this.extendedProfileData.data().gender);
          this.location.locationForm.controls.country.setValue(this.extendedProfileData.data().country);
          this.location.locationForm.controls.state.setValue(this.extendedProfileData.data().state);
          this.location.locationForm.controls.city.setValue(this.extendedProfileData.data().city);
          this.contact.contactForm.controls.phone.setValue(this.extendedProfileData.data().phone);
          this.contact.contactForm.controls.address.setValue(this.extendedProfileData.data().address);

          this.additional.isExtendedProfileLoading = false;
          this.location.isExtendedProfileLoading = false;
          this.contact.isExtendedProfileLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateUser(){
    this.photo.saveButton.disabled = true;

    let data: User = {
      created_at: this.userData.data().created_at,
      first_name: this.basic.basicForm.controls.first_name.value,
      last_name: this.basic.basicForm.controls.last_name.value,
      location: this.location.locationForm.controls.location.value,
      about: this.basic.basicForm.controls.about.value,
    }

    this.userApi.updateUser(data)
      .then(
        (res: any) => {
          console.log(res);
          this.photo.saveButton.disabled = false;
        },
        (err: any) => {
          console.log(err);
          this.photo.saveButton.disabled = false;

          this.connectionToast.openToast();
        }
      )
  }

  updateExtendedProfile(){
    console.log();

    let data: ExtendedProfile = {
      date_of_birth: this.additional.bdayInput.value,
      gender: this.additional.additionalForm.controls.gender.value,
      phone: this.contact.contactForm.controls.phone.value,
      address: this.contact.contactForm.controls.address.value,
      country: this.location.locationForm.controls.country.value,
      state: this.location.locationForm.controls.state.value,
      city: this.location.locationForm.controls.city.value,
    }

    this.settingsApi.updateExtendedProfile(data)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
