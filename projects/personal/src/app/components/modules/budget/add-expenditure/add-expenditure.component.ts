import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { Expenditure } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.scss']
})
export class AddExpenditureComponent implements OnInit {

  constructor() { }

  @Output() saveExpenditureEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  addExpenditureForm: FormGroup = new FormGroup({});

  isSaving = false;

  ngOnInit(): void {
    this.initAddExpenditureForm();
  }

  openModal(){
    this.addExpenditureForm.controls.amount.setValue(0);
    this.addButton.nativeElement.click();
  }

  initAddExpenditureForm(){
    this.addExpenditureForm = new FormGroup({
      itemNumber: new FormControl(''),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveExpenditure(){
    let data: Expenditure = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      budget: sessionStorage.getItem('personal_budget_id') as string,
      item_number: this.addExpenditureForm.controls.itemNumber.value,
      item_description: this.addExpenditureForm.controls.itemDescription.value,
      amount: this.addExpenditureForm.controls.amount.value
    }

    this.saveExpenditureEvent.emit(data);
  }

  resetForm(){
    this.addExpenditureForm.controls.itemNumber.setValue('');
    this.addExpenditureForm.controls.itemDescription.setValue('');
    this.addExpenditureForm.controls.amount.setValue('');
  }


}
