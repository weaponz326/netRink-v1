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

  saved: boolean = false;
  isSending: boolean = false;

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
    this.saved = true;

    if (this.resetForm.valid && this.resetForm.controls.password1.value == this.resetForm.controls.password2.value){
      // TODO:
    }
    else{
      console.log("form is invalid");
    }
  }

}
