import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthApiService } from '../../../services/user/auth-api/auth-api.service';


@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  constructor(
    private authApi: AuthApiService,
  ) { }

  resetForm = new FormGroup({})

  isSending: boolean = false;

  pass1Errors: any;
  pass2Errors: any;
  nfErrors: any;

  ngOnInit(): void {
    this.initResetForm();
  }

  initResetForm(){
    this.resetForm = new FormGroup({
      password1: new FormControl('', [Validators.required, Validators.min(8)]),
      password2: new FormControl('', [Validators.required, Validators.min(8)]),
    })
  }

  onSubmit(){

  }

}
