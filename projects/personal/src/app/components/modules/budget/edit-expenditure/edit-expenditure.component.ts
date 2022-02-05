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

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  editExpenditureForm: FormGroup = new FormGroup({});
  expenditureFormData: Expenditure = {uid: "", budget: "", item_number: "", item_description: "", amount: 0}

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
    this.initeditExpenditureForm();
  }

  openModal(index: any, data: any){
    this.expenditureFormData = data;

    this.selectedIndex = index;
    this.selectedId = data.id;

    this.editExpenditureForm.controls.itemNumber.setValue(this.expenditureFormData.item_number);
    this.editExpenditureForm.controls.itemDescription.setValue(this.expenditureFormData.item_description);
    this.editExpenditureForm.controls.amount.setValue(this.expenditureFormData.amount);

    this.buttonElement.nativeElement.click();
  }

  initeditExpenditureForm(){
    this.editExpenditureForm = new FormGroup({
      itemNumber: new FormControl(),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveExpenditure(){
    let expenditure: Expenditure = {
      uid: this.selectedIndex,
      budget: sessionStorage.getItem('personal_budget_id') as string,
      item_number: this.editExpenditureForm.controls.itemNumber.value,
      item_description: this.editExpenditureForm.controls.itemDescription.value,
      amount: this.editExpenditureForm.controls.amount.value
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      expediture: expenditure
    }

    this.saveExpenditureEvent.emit(data);
  }

}
