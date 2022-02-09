import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatStepper } from '@angular/material/stepper';

import { AuthApiService } from '../../../services/user/auth-api/auth-api.service';
import { UserApiService } from '../../../services/user/user-api/user-api.service';

import { User } from '../../../models/user/user.model';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
    private userApi: UserApiService,
  ) { }

  @ViewChild('stepper') private signupStepper!: MatStepper;

  signupForm = new FormGroup({})

  isSending: boolean = false;
  showPrompt: boolean = false;

  suiteRegistrationType: string = "";

  fnErrors: any;
  lnErrors: any;
  locErrors: any;
  abtErrors: any;
  emailErrors: any;
  pass1Errors: any;
  pass2Errors: any;
  nfErrors: any;

  ngOnInit(): void {
    this.getSource();
    this.initSignupForm();
  }

  getSource(){
    this.suiteRegistrationType = sessionStorage.getItem('app_source') as string;
  }

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
    this.isSending = true;
    this.authApi.signup(this.signupForm.controls.email.value, this.signupForm.controls.password1.value)
      .then(
        (res: any) => {
          console.log(res);

          let user: User = {
            uid: res.user.uid,
            first_name: this.signupForm.controls.firstName.value,
            last_name: this.signupForm.controls.lastName.value,
            location: this.signupForm.controls.location.value,
            about: this.signupForm.controls.about.value,
          }

          this.submitUser(user);
        },
        (err: any) => {
          console.log(err);
          this.isSending = false;
          this.signupStepper.selectedIndex = 0;
        }
      );

    console.log(this.signupForm.value);
  }

  submitUser(user: User){
    console.log(user);

    if (this.signupForm.controls.password1.value == this.signupForm.controls.password2.value){
      this.userApi.createUser(user)
        .then(
          res => {
            console.log(res);

            this.isSending = false;
            this.showPrompt = true;
          },
          err => {
            console.log(err);
          }
        );
    }
    else{
      console.log('passwords do not match');
    }
  }

  onAddressChange(address: any) {
    this.signupForm.controls.location.setValue(address.formatted_address);
    console.log(address);
  }

  registrationRedirect(){
    if (this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink")
      window.location.href = "/";
    else
      window.location.href = "/register";
  }

}
