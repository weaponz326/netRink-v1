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

  emailErrors: any;
  nfErrors: any;

  isSending: boolean = false;
  showPrompt: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSending = true;
    console.log(this.recoveryForm.value);
    this.authApi.sendPasswordResetEmail(this.recoveryForm.controls.eamil.value)
      .then(
        res => {
          this.showPrompt =  true;
          this.isSending = false;
        },
        err => {
          this.isSending = false;
        }
      )
  }

}
