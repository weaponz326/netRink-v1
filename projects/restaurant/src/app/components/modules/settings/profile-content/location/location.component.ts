import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AccountApiService } from 'projects/restaurant/src/app/services/account-api/account-api.service';
import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(
    private accountApi: AccountApiService,
    private settingsApi: SettingsApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  locationForm: FormGroup = new FormGroup({});

  isAccountLoading = true;
  isExtendedProfileLoading = true;
  isAccountSaving = false;
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
    this.updateAccount();
    this.updateExtendedProfile();
  }

  updateAccount(){
    let data = {
      location: this.locationForm.controls.location.value,
    }

    this.isAccountLoading = true;

    this.accountApi.updateAccount(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isAccountLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isAccountLoading = false;

          this.connectionToast.openToast();
        }
      )
  }

  // extended profile
  updateExtendedProfile(){
    let data = {
      country: this.locationForm.controls.country.value,
      state: this.locationForm.controls.state.value,
      city: this.locationForm.controls.city.value,
    }

    this.isExtendedProfileSaving = true;

    this.settingsApi.updateExtendedProfile(data)
      .then(
        res => {
          console.log(res);
          this.isExtendedProfileSaving = false;
        },
        err => {
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
