import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Expenditure } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-edit-expenditure',
  templateUrl: './edit-expenditure.component.html',
  styleUrls: ['./edit-expenditure.component.scss']
})
export class EditExpenditureComponent implements OnInit {

  constructor() { }

  @Output() saveExpenditureEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  editExpenditureForm: FormGroup = new FormGroup({});
  expenditureFormData: any;

  isSaving = false;
  budgetData: any;

  ngOnInit(): void {
    this.initeditExpenditureForm();
  }

  openModal(expenditure: any){
    this.expenditureFormData = expenditure;

    this.editExpenditureForm.controls.itemNumber.setValue(this.expenditureFormData.data().item_number);
    this.editExpenditureForm.controls.itemDescription.setValue(this.expenditureFormData.data().item_description);
    this.editExpenditureForm.controls.amount.setValue(this.expenditureFormData.data().amount);

    this.editButton.nativeElement.click();
  }

  initeditExpenditureForm(){
    this.editExpenditureForm = new FormGroup({
      itemNumber: new FormControl(),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveExpenditure(){
    let data = {
      item_number: this.editExpenditureForm.controls.itemNumber.value,
      item_description: this.editExpenditureForm.controls.itemDescription.value,
      amount: this.editExpenditureForm.controls.amount.value,
      budget: {
        id: sessionStorage.getItem('personal_budget_id') as string,
        data: this.budgetData
      }
    }

    let expenditure = {
      id: this.expenditureFormData.id,
      data: data
    }

    this.saveExpenditureEvent.emit(expenditure);
  }

}
