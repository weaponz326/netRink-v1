import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BdayInputComponent } from '../../../../module-utilities/bday-input/bday-input.component'
import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'

import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';


@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('bdayInputComponentReference', { read: BdayInputComponent, static: false }) bdayInput!: BdayInputComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  additionalForm: FormGroup = new FormGroup({});

  isExtendedProfileLoading = false;

  ngOnInit(): void {
    this.initAdditionalForm();
  }

  initAdditionalForm(){
    this.additionalForm = new FormGroup({
      gender: new FormControl(),
    })
  }

  updateExtendedProfile(){
    let data = {
      date_of_birth: this.bdayInput.value,
      gender: this.additionalForm.controls.gender.value,
    }

    this.isExtendedProfileLoading = true;

    this.settingsApi.updateExtendedProfile(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isExtendedProfileLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isExtendedProfileLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

}
