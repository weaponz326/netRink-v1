import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, Input } from '@angular/core';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component'

import { Account, Transaction } from 'projects/personal/src/app/models/modules/accounts/accounts.model';


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit {

  constructor() { }

  @Output() saveTransactionEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('transactionFormComponentReference', { read: TransactionFormComponent, static: false }) transactionForm!: TransactionFormComponent;

  transactionFormData: any;
  transactionAccount!: Account;

  ngOnInit(): void {
  }

  openModal(data: any){
    this.transactionFormData = data;

    this.transactionForm.transactionForm.controls.transactionDate.setValue(new Date(this.transactionFormData.data().transaction_date).toISOString().slice(0, 16));
    this.transactionForm.transactionForm.controls.description.setValue(this.transactionFormData.data().description);
    this.transactionForm.transactionForm.controls.transactionType.setValue(this.transactionFormData.data().transaction_type);
    this.transactionForm.transactionForm.controls.amount.setValue(this.transactionFormData.data().amount);

    this.buttonElement.nativeElement.click();
  }

  saveTransaction(){
    let data: Transaction = {
      created_at: this.transactionFormData.data().created_at,
      transaction_date: this.transactionForm.transactionForm.controls.transactionDate.value,
      description: this.transactionForm.transactionForm.controls.description.value,
      transaction_type: this.transactionForm.transactionForm.controls.transactionType.value,
      amount: this.transactionForm.transactionForm.controls.amount.value,
      account: {
        id: sessionStorage.getItem('personal_account_id') as string,
        data: this.transactionAccount,
      }
    }

    let transaction = {
      id: this.transactionFormData.id,
      data: data
    }

    this.saveTransactionEvent.emit(transaction);
  }

}
