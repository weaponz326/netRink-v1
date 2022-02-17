import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

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

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  accountForm: FormGroup = new FormGroup({});

  isSavingAccount = false;

  ngOnInit(): void {
    this.initAccountForm();
  }

  openModal(){
    this.accountForm.controls.accountType.setValue("Savings");
    this.newButton.nativeElement.click();
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
    this.isSavingAccount = true;

    let data: Account = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
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
            this.dismissButton.nativeElement.click();
          }
          this.isSavingAccount = false;
        },
        (err: any) => {
          console.log(err);
          this.isSavingAccount = false;
          this.connectionToast.openToast();
        }
      )
  }

}
