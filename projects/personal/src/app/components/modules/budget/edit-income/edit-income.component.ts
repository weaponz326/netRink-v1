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
  incomeFormData: Income = {uid: "", budget: "", item_number: "", item_description: "", amount: 0}

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
    this.initeditIncomeForm();
  }

  openModal(index: any, data: any){
    this.incomeFormData = data;

    this.selectedIndex = index;
    this.selectedId = data.id;

    this.editIncomeForm.controls.itemNumber.setValue(this.incomeFormData.item_number);
    this.editIncomeForm.controls.itemDescription.setValue(this.incomeFormData.item_description);
    this.editIncomeForm.controls.amount.setValue(this.incomeFormData.amount);

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
    let income: Income = {
      uid: this.selectedIndex,
      budget: sessionStorage.getItem('personal_budget_id') as string,
      item_number: this.editIncomeForm.controls.itemNumber.value,
      item_description: this.editIncomeForm.controls.itemDescription.value,
      amount: this.editIncomeForm.controls.amount.value
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      income: income
    }

    this.saveIncomeEvent.emit(data);
  }

}
