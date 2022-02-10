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

  @Input() transactionAccount!: Account;
  @Output() saveTransactionEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('transactionFormComponentReference', { read: TransactionFormComponent, static: false }) transactionForm!: TransactionFormComponent;

  transactionFormData: any;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.transactionFormData = data;

    this.selectedIndex = index;
    this.selectedId = data.id;

    this.transactionForm.transactionForm.controls.transactionDate.setValue(new Date(this.transactionFormData.transaction_date).toISOString().slice(0, 16));
    this.transactionForm.transactionForm.controls.description.setValue(this.transactionFormData.description);
    this.transactionForm.transactionForm.controls.transactionType.setValue(this.transactionFormData.transaction_type);
    this.transactionForm.transactionForm.controls.amount.setValue(this.transactionFormData.amount);

    this.buttonElement.nativeElement.click();
  }

  saveTransaction(){
    let transaction: Transaction = {
      created_at: this.transactionFormData.data().created_at,
      account: this.transactionAccount,
      transaction_date: this.transactionForm.transactionForm.controls.transactionDate.value,
      description: this.transactionForm.transactionForm.controls.description.value,
      transaction_type: this.transactionForm.transactionForm.controls.transactionType.value,
      amount: this.transactionForm.transactionForm.controls.amount.value,
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      transaction: transaction
    }

    this.saveTransactionEvent.emit(data);
  }

}
