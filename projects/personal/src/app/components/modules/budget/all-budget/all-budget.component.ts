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
  nextStartAt: any = [];
  pageNumber = 1;
  disableNext: boolean = false;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllUserBudget(this.sortParams, 20, null);
  }

  getAllUserBudget(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;

    this.budgetApi.getAllUserBudget(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.budgetGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAt = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];

          this.disableNext = false;
          this.disablePrev = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  viewBudget(budgetId: any){
    console.log(budgetId);

    sessionStorage.setItem("personal_budget_id", budgetId);
    this.router.navigateByUrl("/home/budget/view-budget");
  }

  nextPage(e: any){
    e.preventDefault();
    this.disableNext = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserBudget(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();
    this.disablePrev = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserBudget(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserBudget(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.budgetPrint.getPrintBudgets(this.totalItems);
  }

}
