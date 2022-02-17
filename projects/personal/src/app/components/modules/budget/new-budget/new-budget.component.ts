import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { Budget } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.scss']
})
export class NewBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService
  ) { }

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  budgetForm: FormGroup = new FormGroup({});

  isSavingBudget = false;

  ngOnInit(): void {
    this.initBudgetForm();
  }

  openModal(){
    this.budgetForm.controls.budgetType.setValue("Monthly");
    this.newButton.nativeElement.click();
  }

  initBudgetForm(){
    this.budgetForm = new FormGroup({
      budgetName: new FormControl(''),
      budgetType: new FormControl('')
    })
  }

  createBudget(){
    this.isSavingBudget = true;

    let data: Budget = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      user: localStorage.getItem('personal_id') as string,
      budget_name: this.budgetForm.controls.budgetName.value,
      budget_type: this.budgetForm.controls.budgetType.value
    }

    console.log(data);

    this.budgetApi.createBudget(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('personal_budget_id', res.id);
            this.router.navigateByUrl('/home/budget/view-budget');
            this.dismissButton.nativeElement.click();
          }
          this.isSavingBudget = false;
        },
        (err: any) => {
          console.log(err);
          this.isSavingBudget = false;
          this.connectionToast.openToast();
        }
      )
  }

}
