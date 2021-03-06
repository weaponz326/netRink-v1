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

  authError = "";

  saved: boolean = false;
  isSending: boolean = false;
  showPrompt: boolean = false;
  sendVerification: boolean = false;

  suiteRegistrationType: string = "";

  ngOnInit(): void {
    this.getSource();
  }

  getSource(){
    this.suiteRegistrationType = sessionStorage.getItem('app_source') as string;
  }

  onSubmit(){
    this.saved = true;

    if (this.loginForm.valid){
      this.isSending = true;

      this.authApi.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
        .then(
          (res: any) => {
            console.log(res);

            if (res.user.emailVerified){
              localStorage.setItem('personal_id', res.user.uid);
              this.registrationType();
            }
            else{
              this.authApi.sendEmailVerification();
              this.sendVerification = true;
              console.log("verification sent");
            }

            this.isSending = false;
          },
          (err: any) => {
            console.log(err);
            this.authError = err.message.split(': ')[1].split('. ')[0];
            this.isSending = false;
          }
        )
    }
    else{
      console.log("form is invalid");
    }
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
    window.location.href = "/register";
  }

}
