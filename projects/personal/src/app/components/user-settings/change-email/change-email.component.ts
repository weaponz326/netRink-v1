import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {

  emailForm: FormGroup = new FormGroup({});

  isEmailSending = false;

  ngOnInit(): void {
    this.initEmailForm();
  }

  initEmailForm(){
    this.emailForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

}
