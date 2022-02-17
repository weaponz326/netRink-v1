import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Income } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.scss']
})
export class EditIncomeComponent implements OnInit {

  constructor() { }

  @Output() saveIncomeEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  editIncomeForm: FormGroup = new FormGroup({});
  incomeFormData: any;

  ngOnInit(): void {
    this.initeditIncomeForm();
  }

  openModal(income: any){
    this.incomeFormData = income;

    this.editIncomeForm.controls.itemNumber.setValue(this.incomeFormData.data().item_number);
    this.editIncomeForm.controls.itemDescription.setValue(this.incomeFormData.data().item_description);
    this.editIncomeForm.controls.amount.setValue(this.incomeFormData.data().amount);

    this.buttonElement.nativeElement.click();
  }

  initeditIncomeForm(){
    this.editIncomeForm = new FormGroup({
      itemNumber: new FormControl(),
      itemDescription: new FormControl(''),
      amount: new FormControl('')
    })
  }

  saveIncome(){
    let data: Income = {
      created_at: this.incomeFormData.data().created_at,
      budget: sessionStorage.getItem('personal_budget_id') as string,
      item_number: this.editIncomeForm.controls.itemNumber.value,
      item_description: this.editIncomeForm.controls.itemDescription.value,
      amount: this.editIncomeForm.controls.amount.value
    }

    let income = {
      id: this.incomeFormData.id,
      data: data
    }

    this.saveIncomeEvent.emit(income);
  }

}
