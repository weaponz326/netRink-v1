import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'

import { AuthApiService } from 'projects/personal/src/app/services/user/auth-api/auth-api.service';
import { SettingsApiService } from 'projects/personal/src/app/services/modules/settings-api/settings-api.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private settingsApi: SettingsApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  contactForm: FormGroup = new FormGroup({});

  isAuthLoading = false;
  isExtendedProfileLoading = false;
  isExtendedProfileSaving = false;

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(){
    this.contactForm = new FormGroup({
      email: new FormControl({valaue: "", disabled: true}),
      phone: new FormControl(),
      address: new FormControl(),
    })
  }

  updateExtendedProfile(){
    console.log();
    this.isExtendedProfileSaving = true;

    let data = {
      phone: this.contactForm.controls.phone.value,
      address: this.contactForm.controls.address.value,
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

}
