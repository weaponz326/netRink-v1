import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'

import { UserApiService } from 'projects/personal/src/app/services/user/user-api/user-api.service';
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(
    private userApi: UserApiService,
    private settingsApi: SettingsApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  locationForm: FormGroup = new FormGroup({});

  isUserLoading = false;
  isExtendedProfileLoading = false;
  isUserSaving = false;
  isExtendedProfileSaving = false;

  ngOnInit(): void {
    this.initLocationForm();
  }

  initLocationForm(){
    this.locationForm = new FormGroup({
      location: new FormControl(),
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
    })
  }

  updateLocation(){
    this.updateUser();
    this.updateExtendedProfile();
  }

  updateUser(){
    let data = {
      location: this.locationForm.controls.location.value,
    }

    this.isUserSaving = true;

    this.userApi.updateUser(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isUserSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isUserSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateExtendedProfile(){
    console.log();
    this.isExtendedProfileSaving = true;

    let data = {
      country: this.locationForm.controls.country.value,
      state: this.locationForm.controls.state.value,
      city: this.locationForm.controls.city.value,
    }

    this.settingsApi.updateExtendedProfile(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isExtendedProfileSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isExtendedProfileSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  onAddressChange(address: any) {
    this.locationForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

}
