import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { Income } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  constructor() { }

  @Output() saveIncomeEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  addIncomeForm: FormGroup = new FormGroup({});
  budgetData: any;

  isSaving = false;

  ngOnInit(): void {
    this.initAddIncomeForm();
  }

  openModal(){
    this.addIncomeForm.controls.amount.setValue(0.00);
    this.addButton.nativeElement.click();
  }

  initAddIncomeForm(){
    this.addIncomeForm = new FormGroup({
      itemNumber: new FormControl(''),
      itemDescription: new FormControl(''),
      amount: new FormControl()
    })
  }

  saveIncome(){
    let data: Income = {
      created_at: serverTimestamp(),
      item_number: this.addIncomeForm.controls.itemNumber.value,
      item_description: this.addIncomeForm.controls.itemDescription.value,
      amount: this.addIncomeForm.controls.amount.value,
      budget: {
        id: sessionStorage.getItem('personal_budget_id') as string,
        data: this.budgetData
      }
    }

    this.saveIncomeEvent.emit(data);
  }

  resetForm(){
    this.addIncomeForm.controls.itemNumber.setValue('');
    this.addIncomeForm.controls.itemDescription.setValue('');
    this.addIncomeForm.controls.amount.setValue('');
  }

}
