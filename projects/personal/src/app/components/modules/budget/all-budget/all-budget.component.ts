import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NewBudgetComponent } from '../new-budget/new-budget.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { BudgetPrintService } from 'projects/personal/src/app/services/printing/budget-print/budget-print.service';

import { Budget } from 'projects/personal/src/app/models/modules/budget/budget.model';


@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.scss']
})
export class AllBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
    private budgetPrint: BudgetPrintService
  ) { }

  @ViewChild('newBudgetComponentReference', { read: NewBudgetComponent, static: false }) newBudget!: NewBudgetComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget" },
  ];

  // budgetGridData: Budget[] = [];
  budgetGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStartAt: any = [];
  nextStartAfter: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getUserBudget();
  }

  getUserBudget(){
    this.isFetchingGridData = true;

    this.budgetApi.getUserBudget(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.budgetGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;
          if (!res.docs.length) this.isDataAvailable = false;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.budgetApi.getUserBudgetNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.budgetGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.budgetApi.getUserBudgetPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.budgetGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getUserBudget();
  }

  viewBudget(budgetId: any){
    console.log(budgetId);

    sessionStorage.setItem("personal_budget_id", budgetId);
    this.router.navigateByUrl("/home/budget/view-budget");
  }

  onPrint(){
    console.log("lets start printing...");
    this.budgetPrint.printAllBudget();
  }

}
