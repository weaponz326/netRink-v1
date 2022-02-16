import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { AddIncomeComponent } from '../add-income/add-income.component'
import { EditIncomeComponent } from '../edit-income/edit-income.component'
import { AddExpenditureComponent } from '../add-expenditure/add-expenditure.component'
import { EditExpenditureComponent } from '../edit-expenditure/edit-expenditure.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { Income, Expenditure } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-budget-tables',
  templateUrl: './budget-tables.component.html',
  styleUrls: ['./budget-tables.component.scss']
})
export class BudgetTablesComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @Output() ioeEvent = new EventEmitter<any>();

  @ViewChild('addIncomeComponentReference', { read: AddIncomeComponent, static: false }) addIncome!: AddIncomeComponent;
  @ViewChild('editIncomeComponentReference', { read: EditIncomeComponent, static: false }) editIncome!: EditIncomeComponent;
  @ViewChild('addExpenditureComponentReference', { read: AddExpenditureComponent, static: false }) addExpenditure!: AddExpenditureComponent;
  @ViewChild('editExpenditureComponentReference', { read: EditExpenditureComponent, static: false }) editExpenditure!: EditExpenditureComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  incomeGridData: any[] = [];
  expenditureGridData: any[] = [];

  isFetchingIncomeGridData: boolean =  false;
  isFetchingExpenditureGridData: boolean =  false;

  totalIncome = 0;
  totalExpenditure = 0;

  deleteType = "";
  deleteId = "";
  deleteIndex = 0;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllBudgetIncome();
    this.getAllBudgetExpenditure();
  }

  calculateIoe(){
    let ioe = this.totalIncome - this.totalExpenditure;
    this.ioeEvent.emit(ioe);
    console.log(ioe);
  }

  // income

  calculateTotalIncome(){
    for (let item of this.incomeGridData){
      this.totalIncome += item.amount;
    }

    console.log(this.totalIncome);
    this.calculateIoe();
  }

  getAllBudgetIncome(){
    this.isFetchingIncomeGridData = true;

    this.budgetApi.getBudgetIncome()
      .then(
        (res: any) => {
          console.log(res);
          this.incomeGridData = res.docs;
          this.isFetchingIncomeGridData = false;

          this.calculateTotalIncome();
        },
        (err: any) => {
          console.log(err);
          this.isFetchingIncomeGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createIncome(data: any){
    console.log(data);

    this.budgetApi.createIncome(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.uid){
            this.incomeGridData.push(res);
            this.calculateTotalIncome();
            this.addIncome.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateIncome(data: any){
    console.log(data);

    this.budgetApi.updateIncome(data.id, data.income)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.incomeGridData[data.index] = res;
            this.calculateTotalIncome();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteIncome(index: any, id: any){
    console.log(id);

    this.budgetApi.deleteIncome(id)
      .then(
        (res: any) => {
          console.log(res);
          this.incomeGridData.splice(index, 1);
          this.calculateTotalIncome();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditIncome(index: any){
    console.log(index);
    this.editIncome.openModal(index, this.incomeGridData[index]);
  }

  // expenditure

  calculateTotalExpenditure(){
    for (let item of this.expenditureGridData){
      this.totalExpenditure += item.amount;
    }

    console.log(this.totalExpenditure);
    this.calculateIoe();
  }

  getAllBudgetExpenditure(){
    this.isFetchingExpenditureGridData = true;

    this.budgetApi.getBudgetExpenditure()
      .then(
        (res: any) => {
          console.log(res);
          this.expenditureGridData = res.docs;
          this.isFetchingExpenditureGridData = false;

          this.calculateTotalExpenditure();
        },
        (err: any) => {
          console.log(err);
          this.isFetchingExpenditureGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createExpenditure(data: any){
    console.log(data);

    this.budgetApi.createExpenditure(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.expenditureGridData.push(res);
            this.calculateTotalExpenditure();
            this.addExpenditure.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateExpenditure(data: any){
    console.log(data);

    this.budgetApi.updateExpenditure(data.uid, data.expenditure)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.expenditureGridData[data.index] = res;
            this.calculateTotalExpenditure();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteExpenditure(index: any, id: any){
    console.log(id);

    this.budgetApi.deleteExpenditure(id)
      .then(
        (res: any) => {
          console.log(res);
          this.expenditureGridData.splice(index, 1);
          this.calculateTotalExpenditure();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditExpenditure(index: any){
    console.log(index);
    this.editExpenditure.openModal(index, this.expenditureGridData[index]);
  }

  // deletions

  // open confirm delete modal
  confirmDelete(type: any, index: any, id: any){
    console.log(type);

    this.deleteType = type;
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

  // delete income or expenditure
  deleteItem(){
    if(this.deleteType == "Income")
      this.deleteIncome(this.deleteIndex, this.deleteId);
    else if(this.deleteType == "Expenditure")
      this.deleteExpenditure(this.deleteIndex, this.deleteId)
  }

}
