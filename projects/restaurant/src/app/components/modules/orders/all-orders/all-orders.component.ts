import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';

import { AddOrderComponent } from '../add-order/add-order.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService
  ) { }

  @ViewChild('addOrderComponentReference', { read: AddOrderComponent, static: false }) addOrder!: AddOrderComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('orderCodeSortingComponentReference', { read: TableSortingComponent, static: false }) orderCodeSorting!: TableSortingComponent;
  @ViewChild('customerNameSortingComponentReference', { read: TableSortingComponent, static: false }) customerNameSorting!: TableSortingComponent;
  @ViewChild('orderDateSortingComponentReference', { read: TableSortingComponent, static: false }) orderDateSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders" },
  ];

  ordersGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.ordersApi.getOrders()
      .subscribe(
        res => {
          console.log(res);
          this.ordersGridData = res;
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

  viewOrder(orderId: any){
    console.log(orderId);

    sessionStorage.setItem("restaurant_order_id", orderId);
    this.router.navigateByUrl("/home/orders/view-order");
  }

  sortTable(field: any){
    console.log(field);
    this.getOrders();

    if((field == 'order_code') || (field == "-orderCode")){
      this.orderCodeSorting.resetSort();
    }
    else if((field == 'customer_name') || (field == "-customer_name")){
      this.customerNameSorting.resetSort();
    }
    else if((field == 'order_date') || (field == "-order_date")){
      this.orderDateSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
