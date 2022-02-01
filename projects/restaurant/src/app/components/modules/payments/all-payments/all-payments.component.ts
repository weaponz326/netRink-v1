import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.scss']
})
export class AllPaymentsComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('paymentCodeSortingComponentReference', { read: TableSortingComponent, static: false }) paymentCodeSorting!: TableSortingComponent;
  @ViewChild('paymentDateSortingComponentReference', { read: TableSortingComponent, static: false }) paymentDateSorting!: TableSortingComponent;
  @ViewChild('customerSortingComponentReference', { read: TableSortingComponent, static: false }) customerSorting!: TableSortingComponent;
  @ViewChild('amountSortingComponentReference', { read: TableSortingComponent, static: false }) amountSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Payments", url: "/home/payments/all-payments" },
  ];

  paymentsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPayments();
  }

  getPayments(){
    this.paymentsApi.getPayments()
      .subscribe(
        res => {
          console.log(res);
          this.paymentsGridData = res;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewPayment(paymentId: any){
    console.log(paymentId);

    sessionStorage.setItem("restaurant_payment_id", paymentId);
    this.router.navigateByUrl("/home/payments/view-payment");
  }

  sortTable(field: any){
    console.log(field);
    this.getPayments();

    if((field == 'payment_code') || (field == "-payment_code")){
      this.paymentCodeSorting.resetSort();
    }
    else if((field == 'payment_date') || (field == "-payment_date")){
      this.paymentDateSorting.resetSort();
    }
    else if((field == 'customer') || (field == "-customer")){
      this.customerSorting.resetSort();
    }
    else if((field == 'amount') || (field == "-amount")){
      this.amountSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
