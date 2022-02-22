import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { BudgetTablesComponent } from '../budget-tables/budget-tables.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { BudgetPrintService } from 'projects/personal/src/app/services/printing/budget-print/budget-print.service';

import { Budget } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.scss']
})
export class ViewBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
    private budgetPrint: BudgetPrintService
  ) { }

  @ViewChild('budgetTablesComponentReference', { read: BudgetTablesComponent, static: false }) budgetTables!: BudgetTablesComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget" },
    { text: "View Budget", url: "/home/budget/view-budget" },
  ];

  budgetForm: FormGroup = new FormGroup({});
  budgetFormData: any;

  ioe = 0;

  isBudgetLoading: boolean = false;
  isBudgetSaving: boolean = false;
  isBudgetDeleting: boolean = false;

  ngOnInit(): void {
    this.initBudgetForm();
    this.getBudget();
  }

  initBudgetForm(){
    this.budgetForm = new FormGroup({
      budgetName: new FormControl(''),
      budgetType: new FormControl('')
    })
  }

  getBudget(){
    this.isBudgetLoading = true;

    this.budgetApi.getBudget()
      .then(
        (res: any) => {
          console.log(res);
          this.budgetFormData = res;
          this.budgetForm.controls.budgetName.setValue(this.budgetFormData.data().budget_name);
          this.budgetForm.controls.budgetType.setValue(this.budgetFormData.data().budget_type);

          this.budgetTables.addIncome.budgetData = this.budgetFormData.data();
          this.budgetTables.editIncome.budgetData = this.budgetFormData.data();
          this.budgetTables.addExpenditure.budgetData = this.budgetFormData.data();
          this.budgetTables.editExpenditure.budgetData = this.budgetFormData.data();

          this.isBudgetLoading = false;
        },
        (err: any) => {
          console.log(err);
          this.isBudgetLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateBudget(){
    let data = {
      budget_name: this.budgetForm.controls.budgetName.value,
      budget_type: this.budgetForm.controls.budgetType.value
    }

    console.log(data);
    this.isBudgetSaving = true;

    this.budgetApi.updateBudget(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isBudgetSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isBudgetSaving = false;
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteBudget(){
    this.isBudgetDeleting = true;

    this.budgetApi.deleteBudget()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/budget/all-budget');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isBudgetDeleting = false;
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.budgetPrint.printViewBudget();
  }

}
