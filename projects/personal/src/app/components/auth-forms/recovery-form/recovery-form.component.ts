import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthApiService } from '../../../services/user/auth-api/auth-api.service';


@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.scss']
})
export class RecoveryFormComponent implements OnInit {

  constructor(private authApi: AuthApiService) { }

  recoveryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  authError = "";

  saved: boolean = false;
  isSending: boolean = false;
  showPrompt: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(){
    this.saved = true;

    if (this.recoveryForm.valid){
      this.isSending = true;

      console.log(this.recoveryForm.value);
      this.authApi.sendPasswordResetEmail(this.recoveryForm.controls.email.value)
        .then(
          res => {
            console.log(res);
            this.showPrompt =  true;
            this.isSending = false;
          },
          err => {
            console.log(err);
            this.isSending = false;
            this.authError = err.message.split(': ')[1].split('. ')[0];
          }
        )
    }
    else{
      console.log("form is invalid");
    }
  }

}
