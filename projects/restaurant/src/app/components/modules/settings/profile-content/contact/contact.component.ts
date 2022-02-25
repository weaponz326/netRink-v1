import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { SettingsApiService } from 'projects/restaurant/src/app/services/modules/settings-api/settings-api.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  contactForm: FormGroup = new FormGroup({});

  isExtendedProfileLoading = false;
  isExtendedProfileSaving = false;

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm(){
    this.contactForm = new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
    })
  }

  updateExtendedProfile(){
    let data = {
      email: this.contactForm.controls.email.value,
      phone: this.contactForm.controls.phone.value,
      address: this.contactForm.controls.address.value,
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

}
