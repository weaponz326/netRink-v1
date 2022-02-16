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

  @Input() transactionAccount!: Account;
  @Output() balanceEvent = new EventEmitter<any>();

  @ViewChild('addTransactionComponentReference', { read: AddTransactionComponent, static: false }) addTransaction!: AddTransactionComponent;
  @ViewChild('editTransactionComponentReference', { read: EditTransactionComponent, static: false }) editTransaction!: EditTransactionComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  transactionsGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  balance = 0;

  isFetchingGridData = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccountTransaction();
  }

  calculateBalance(){
    for (let transaction of this.transactionsGridData){
      if (transaction.transaction_type == "Credit")
        this.balance += transaction.amount;
      else
        this.balance -= transaction.amount;
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

    this.accountsApi.createTransaction(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.transactionsGridData.push(res);
            this.calculateBalance();
            this.addTransaction.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateTransaction(data: any){
    console.log(data);

    this.accountsApi.updateTransaction(data.id, data.transaction)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.transactionsGridData[data.index] = res;
            this.calculateBalance();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteTransaction(){
    console.log(this.deleteId);

    this.accountsApi.deleteTransaction(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.transactionsGridData.splice(this.deleteIndex, 1);
          this.calculateBalance();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditTransaction(index: any){
    console.log(index);
    this.editTransaction.openModal(index, this.transactionsGridData[index]);
  }

  confirmDelete(index: any, id: any){
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

}
