import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { AccountTransactionsComponent } from '../account-transactions/account-transactions.component';
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';

import { Account } from 'projects/personal/src/app/models/modules/accounts/accounts.model';


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss']
})
export class ViewAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    private accountsPrint: AccountsPrintService
  ) { }

  @ViewChild('accountTransactionsComponentReference', { read: AccountTransactionsComponent, static: false }) accountTransactions!: AccountTransactionsComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
    { text: "View Account", url: "/home/accounts/view-account" },
  ];

  accountForm: FormGroup = new FormGroup({});
  accountFormData: any;

  balance = 0;

  isAccountLoading: boolean = false;
  isAccountSaving: boolean = false;
  isAccountDeleting: boolean = false;

  ngOnInit(): void {
    this.initAccountForm();
  }

  ngAfterViewInit(): void {
    this.getAccount();
  }

  initAccountForm(){
    this.accountForm = new FormGroup({
      accountName: new FormControl(''),
      accountNumber: new FormControl(''),
      bankName: new FormControl(''),
      accountType: new FormControl('')
    })
  }

  getAccount(){
    this.isAccountLoading = true;

    this.accountsApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.accountFormData = res;

          this.accountForm.controls.accountName.setValue(this.accountFormData.data().account_name);
          this.accountForm.controls.accountNumber.setValue(this.accountFormData.data().account_number);
          this.accountForm.controls.bankName.setValue(this.accountFormData.data().bank_name);
          this.accountForm.controls.accountType.setValue(this.accountFormData.data().account_type);

          this.accountTransactions.addTransaction.transactionAccount = this.accountFormData.data();
          this.accountTransactions.editTransaction.transactionAccount = this.accountFormData.data();

          this.isAccountLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isAccountLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateAccount(){
    let data: Account = {
      created_at: this.accountFormData.data().created_at,
      user: localStorage.getItem('personal_id') as string,
      account_name: this.accountForm.controls.accountName.value,
      account_number: this.accountForm.controls.accountNumber.value,
      bank_name: this.accountForm.controls.bankName.value,
      account_type: this.accountForm.controls.accountType.value
    }

    console.log(data);
    this.isAccountSaving = true;

    this.accountsApi.updateAccount(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isAccountSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isAccountSaving = false;
        }
      )
  }

  deleteAccount(){
    this.isAccountDeleting = true;

    this.accountsApi.deleteAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/accounts/all-accounts');
          this.isAccountDeleting = false;
        },
        (err: any) => {
          console.log(err);
          this.isAccountDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
    this.accountsPrint.printViewAccount();
  }

}
