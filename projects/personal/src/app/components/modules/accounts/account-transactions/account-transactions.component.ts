import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { AddTransactionComponent } from '../add-transaction/add-transaction.component'
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { Account, Transaction } from 'projects/personal/src/app/models/modules/accounts/accounts.model';


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @Output() balanceEvent = new EventEmitter<any>();

  @ViewChild('addTransactionComponentReference', { read: AddTransactionComponent, static: false }) addTransaction!: AddTransactionComponent;
  @ViewChild('editTransactionComponentReference', { read: EditTransactionComponent, static: false }) editTransaction!: EditTransactionComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  transactionsGridData: any[] = [];

  deleteId = "";
  balance = 0;

  isFetchingGridData = false;
  isTransactionDeleting = false;

  ngOnInit(): void {
    this.getAccountTransaction();
  }

  calculateBalance(){
    this.balance = 0;
    for (let transaction of this.transactionsGridData){
      if (transaction.data().transaction_type == "Credit")
        this.balance += transaction.data().amount;
      else
        this.balance -= transaction.data().amount;
    }

    this.balanceEvent.emit(this.balance);
    console.log(this.balance);
  }

  getAccountTransaction(){
    this.isFetchingGridData = true;

    this.accountsApi.getAccountTransaction()
      .then(
        (res: any) => {
          console.log(res);

          this.transactionsGridData = res.docs;
          this.isFetchingGridData = false;
          this.calculateBalance();
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createTransaction(data: any){
    console.log(data);
    this.addTransaction.isSaving = true;

    this.accountsApi.createTransaction(data)
      .then(
        (res: any) => {
          console.log(res);

          this.addTransaction.isSaving = false;
          this.addTransaction.dismissButton.nativeElement.click();
          this.getAccountTransaction();
          this.addTransaction.resetForm();
        },
        (err: any) => {
          console.log(err);
          this.addTransaction.isSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateTransaction(transaction: any){
    console.log(transaction);
    this.editTransaction.isSaving = true;

    this.accountsApi.updateTransaction(transaction.id, transaction.data)
      .then(
        (res: any) => {
          console.log(res);
          this.editTransaction.dismissButton.nativeElement.click();
          this.editTransaction.isSaving = false;
          this.getAccountTransaction();
        },
        (err: any) => {
          console.log(err);
          this.editTransaction.isSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  deleteTransaction(){
    console.log(this.deleteId);
    this.isTransactionDeleting = true;

    this.accountsApi.deleteTransaction(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
        this.isTransactionDeleting = false;
        this.getAccountTransaction();
        },
        (err: any) => {
          console.log(err);
          this.isTransactionDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  openEditTransaction(data: any){
    console.log(data);
    this.editTransaction.openModal(data);
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}
