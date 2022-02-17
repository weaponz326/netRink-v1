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

  isIncomeSaving = false;
  isExpenditureSaving = false;
  isIncomeDeleting = false;
  isExpenditureDeleting = false;

  totalIncome = 0;
  totalExpenditure = 0;

  deleteType = "";
  deleteId = "";

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getBudgetIncome();
    this.getBudgetExpenditure();
  }

  calculateIoe(){
    let ioe = this.totalIncome - this.totalExpenditure;
    this.ioeEvent.emit(ioe);
    console.log(ioe);
  }

  // income

  calculateTotalIncome(){
    this.totalIncome = 0;
    for (let item of this.incomeGridData){
      this.totalIncome += item.data().amount;
    }

    console.log(this.totalIncome);
    this.calculateIoe();
  }

  getBudgetIncome(){
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
    this.isIncomeSaving = true;

    this.budgetApi.createIncome(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isIncomeSaving = false;

          if(res.id){
            this.getBudgetIncome();
            this.addIncome.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.isIncomeSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateIncome(income: any){
    console.log(income);
    this.isIncomeSaving = true;

    this.budgetApi.updateIncome(income.id, income.data)
      .then(
        (res: any) => {
          console.log(res);
          this.isIncomeSaving = false;
          this.getBudgetIncome();
        },
        (err: any) => {
          console.log(err);
          this.isIncomeSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  deleteIncome(id: any){
    console.log(id);
    this.isIncomeDeleting = true;

    this.budgetApi.deleteIncome(id)
      .then(
        (res: any) => {
          console.log(res);
          this.isIncomeDeleting = false;
          this.getBudgetIncome();
        },
        (err: any) => {
          console.log(err);
          this.isIncomeDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  openEditIncome(data: any){
    console.log(data);
    this.editIncome.openModal(data);
  }

  // expenditure

  calculateTotalExpenditure(){
    this.totalExpenditure = 0;
    for (let item of this.expenditureGridData){
      this.totalExpenditure += item.data().amount;
    }

    console.log(this.totalExpenditure);
    this.calculateIoe();
  }

  getBudgetExpenditure(){
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
    this.isExpenditureSaving = true;

    this.budgetApi.createExpenditure(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isExpenditureSaving = false;

          if(res.id){
            this.getBudgetExpenditure();
            this.addExpenditure.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.isExpenditureSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateExpenditure(expenditure: any){
    console.log(expenditure);
    this.isExpenditureSaving = true;

    this.budgetApi.updateExpenditure(expenditure.id, expenditure.data)
      .then(
        (res: any) => {
          console.log(res);
          this.isExpenditureSaving = false;
          this.getBudgetExpenditure()
        },
        (err: any) => {
          console.log(err);
          this.isExpenditureSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  deleteExpenditure(id: any){
    console.log(id);
    this.isExpenditureDeleting = true;

    this.budgetApi.deleteExpenditure(id)
      .then(
        (res: any) => {
          console.log(res);
          this.isExpenditureDeleting = false;
          this.getBudgetExpenditure();
        },
        (err: any) => {
          console.log(err);
          this.isExpenditureDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  openEditExpenditure(data: any){
    console.log(data);
    this.editExpenditure.openModal(data);
  }

  // deletions

  // open confirm delete modal
  confirmDelete(type: any, id: any){
    console.log(type);

    this.deleteType = type;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

  // delete income or expenditure
  deleteItem(){
    if(this.deleteType == "Income")
      this.deleteIncome(this.deleteId);
    else if(this.deleteType == "Expenditure")
      this.deleteExpenditure(this.deleteId)
  }

}
