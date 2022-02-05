import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { Account } from 'projects/personal/src/app/models/modules/accounts/accounts.model';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService
  ) { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  accountForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initAccountForm();
  }

  openModal(){
    this.accountForm.controls.accountType.setValue("Savings");

    this.buttonElement.nativeElement.click();
  }

  initAccountForm(){
    this.accountForm = new FormGroup({
      accountName: new FormControl(''),
      accountNumber: new FormControl(''),
      bankName: new FormControl(''),
      accountType: new FormControl('')
    })
  }

  createAccount(){
    let data: Account = {
      uid: "",
      user: localStorage.getItem('personal_id') as string,
      account_name: this.accountForm.controls.accountName.value,
      account_number: this.accountForm.controls.accountNumber.value,
      bank_name: this.accountForm.controls.bankName.value,
      account_type: this.accountForm.controls.accountType.value
    }

    console.log(data);

    this.accountsApi.createAccount(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('personal_account_id', res.id);
            this.router.navigateByUrl('/home/accounts/view-account');
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
