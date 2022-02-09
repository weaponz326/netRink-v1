import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApiService } from '../../../services/user/auth-api/auth-api.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private authApi: AuthApiService,
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  emailErrors: any;
  passErrors: any;
  nfErrors: any;

  isSending: boolean = false;
  showPrompt: boolean = false;

  suiteRegistrationType: string = "";

  ngOnInit(): void {
    this.getSource();
  }

  getSource(){
    this.suiteRegistrationType = sessionStorage.getItem('app_source') as string;
  }

  onSubmit(){
    this.isSending = true;
    this.authApi.login(this.loginForm.controls.email.value, this.loginForm.controls.email.value)
      .then(
        res => {
          console.log(res);
          this.isSending = false;

          this.registrationType();
        },
        err => {
          console.log(err);
          this.isSending = false;
        }
      )
  }

  registrationType(){
    if (this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink"){
      window.location.href = "/";
    }
    else{
      if (sessionStorage.getItem("isSuiteRegistration") == "OK"){
        this.showPrompt = true;
      }
      else{
        window.location.href = "/";
      }

      sessionStorage.removeItem("isSuiteRegistration");
    }
  }

  registrationRedirect(){
    // TODO: can't get auth_token if angular router is used
    window.location.href = "/register";
  }

}
