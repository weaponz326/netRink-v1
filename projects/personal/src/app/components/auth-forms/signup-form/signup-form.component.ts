import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';
import { serverTimestamp } from 'firebase/firestore';

import { AuthApiService } from '../../../services/user/auth-api/auth-api.service';
import { UserApiService } from '../../../services/user/user-api/user-api.service';
import { SettingsApiService } from '../../../services/modules/settings-api/settings-api.service';

import { User } from '../../../models/user/user.model';
import { ExtendedProfile } from '../../../models/modules/settings/settings.model';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private userApi: UserApiService,
    private settingsApi: SettingsApiService,
  ) { }

  @ViewChild('stepper') private signupStepper!: MatStepper;

  signupForm = new FormGroup({})

  authError = "";

  saved: boolean = false;
  isSending: boolean = false;
  showPrompt: boolean = false;

  // suiteRegistrationType: string = "";

  registeredUserId = "";

  ngOnInit(): void {
    // this.getSource();
    this.initSignupForm();
  }

  // getSource(){
  //   this.suiteRegistrationType = sessionStorage.getItem('app_source') as string;
  // }

  initSignupForm(){
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('', [Validators.required, Validators.min(8)]),
      password2: new FormControl('', [Validators.required, Validators.min(8)]),
    })
  }

  onSubmit(){
    this.saved = true;

    if (this.signupForm.valid && this.signupForm.controls.password1.value == this.signupForm.controls.password2.value){
      this.isSending = true;

      this.authApi.signup(this.signupForm.controls.email.value, this.signupForm.controls.password1.value)
        .then(
          (res: any) => {
            console.log(res);

            this.registeredUserId = res.user.uid;

            this.createUSer();
            this.createExtendedProfile();
            this.sendEmailVerification();

            this.isSending = false;
            this.showPrompt = true;
          },
          (err: any) => {
            console.log(err);
            this.isSending = false;
            this.signupStepper.selectedIndex = 0;
            this.authError = err.message.split(': ')[1].split('. ')[0];
          }
        );
    }
    else{
      console.log("form is invalid");
      this.signupStepper.selectedIndex = 0;
    }

    console.log(this.signupForm.value);
  }

  createUSer(){
    let userData: User = {
      created_at: serverTimestamp(),
      first_name: this.signupForm.controls.firstName.value,
      last_name: this.signupForm.controls.lastName.value,
      location: this.signupForm.controls.location.value,
      about: this.signupForm.controls.about.value,
      photo: "",
    }

    this.userApi.createUser(this.registeredUserId, userData)
      .then(
        res => console.log(res),
        err => console.log(err)
      );
  }

  createExtendedProfile(){
    let data: ExtendedProfile = {
      date_of_birth: "",
      gender: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
    }

    this.settingsApi.createExtendedProfile(this.registeredUserId, data)
      .then(
        res => console.log(res),
        err => console.log(err)
      );
  }

  sendEmailVerification(){
    let actionCodeSettings = {

    }

    this.authApi.sendEmailVerification(actionCodeSettings)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  onAddressChange(address: any) {
    this.signupForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

  // registrationRedirect(){
  //   if (this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink")
  //     window.location.href = "/";
  //   else
  //     window.location.href = "/register";
  // }

}
