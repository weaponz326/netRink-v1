import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AddAccountComponent } from '../add-account/add-account.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';

import { Account } from 'projects/personal/src/app/models/modules/accounts/accounts.model';


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    private accountsPrint: AccountsPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('addAccountComponentReference', { read: AddAccountComponent, static: false }) addAccount!: AddAccountComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
  ];

  accountsGridData: any[] = [];

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
    this.getAllUserAccount(this.sortParams, 20, null);
  }

  getAllUserAccount(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;

    this.accountsApi.getAllUserAccount(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.accountsGridData = res.docs;
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

  viewAccount(accountId: any){
    console.log(accountId);

    sessionStorage.setItem("personal_account_id", accountId);
    this.router.navigateByUrl("/home/accounts/view-account");
  }

  nextPage(e: any){
    e.preventDefault();
    this.disableNext = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserAccount(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();
    this.disablePrev = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserAccount(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserAccount(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.accountsPrint.getPrintAccounts(this.totalItems);
  }

}
