import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('customerCodeSortingComponentReference', { read: TableSortingComponent, static: false }) customerCodeSorting!: TableSortingComponent;
  @ViewChild('customerNameSortingComponentReference', { read: TableSortingComponent, static: false }) customerNameSorting!: TableSortingComponent;
  @ViewChild('phoneSortingComponentReference', { read: TableSortingComponent, static: false }) phoneSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/home/customers/all-customers" },
  ];

  customersGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCustomers();
  }


  getCustomers(){
    this.customersApi.getCustomers()
      .subscribe(
        res => {
          console.log(res);
          this.customersGridData = res;
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

  viewCustomer(customerId: any){
    console.log(customerId);
    sessionStorage.setItem('restaurant_customer_id', customerId);

    this.router.navigateByUrl('/home/customers/view-customer');
  }

  sortTable(field: any){
    console.log(field);
    this.getCustomers();

    if((field == 'customer_code') || (field == "-customer_code")){
      this.customerCodeSorting.resetSort();
    }
    else if((field == 'customer_name') || (field == "-customer_name")){
      this.customerNameSorting.resetSort();
    }
    else if((field == 'phone') || (field == "-phone")){
      this.phoneSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
