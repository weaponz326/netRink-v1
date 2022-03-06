import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup = new FormGroup({});

  isResetSending = false;

  ngOnInit(): void {
    this.initResetForm();
  }

  initResetForm(){
    this.resetForm = new FormGroup({
      oldPassword: new FormControl(''),
      password1: new FormControl(''),
      password2: new FormControl(''),
    })
  }

}
