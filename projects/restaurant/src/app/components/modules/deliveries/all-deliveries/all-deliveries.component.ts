import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';

import { NewDeliveryComponent } from '../new-delivery/new-delivery.component'
import { EditDeliveryComponent } from '../edit-delivery/edit-delivery.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.scss']
})
export class AllDeliveriesComponent implements OnInit {

  constructor(
    private router: Router,
    private deliveriesApi: DeliveriesApiService
  ) { }

  @ViewChild('newDeliveryComponentReference', { read: NewDeliveryComponent, static: false }) newDelivery!: NewDeliveryComponent;
  @ViewChild('editDeliveryComponentReference', { read: EditDeliveryComponent, static: false }) editDelivery!: EditDeliveryComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('deliveryCodeSortingComponentReference', { read: TableSortingComponent, static: false }) deliveryCodeSorting!: TableSortingComponent;
  @ViewChild('deliveryDateSortingComponentReference', { read: TableSortingComponent, static: false }) deliveryDateSorting!: TableSortingComponent;
  @ViewChild('orderCodeSortingComponentReference', { read: TableSortingComponent, static: false }) orderCodeSorting!: TableSortingComponent;
  @ViewChild('deliveryLocationSortingComponentReference', { read: TableSortingComponent, static: false }) deliveryLocationSorting!: TableSortingComponent;
  @ViewChild('deliveryStatusSortingComponentReference', { read: TableSortingComponent, static: false }) deliveryStatusSorting!: TableSortingComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Deliveries", url: "/home/deliveries/all-deliveries" },
  ];

  deliveriesGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalDeliveries = 0;

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDeliveries();
  }

  getDeliveries(){
    this.deliveriesApi.getDeliveries()
      .subscribe(
        res => {
          console.log(res);
          this.deliveriesGridData = res;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalDeliveries = res.count;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any){
    console.log(field);
    this.getDeliveries();

    if((field == 'delivery_code') || (field == "-delivery_code")){
      this.deliveryCodeSorting.resetSort();
    }
    else if((field == 'delivery_date') || (field == "-delivery_date")){
      this.deliveryDateSorting.resetSort();
    }
    else if((field == 'order_id') || (field == "-order_id")){
      this.orderCodeSorting.resetSort();
    }
    else if((field == 'delivery_location') || (field == "-delivery_location")){
      this.deliveryLocationSorting.resetSort();
    }
    else if((field == 'delivery_status') || (field == "-delivery_status")){
      this.deliveryStatusSorting.resetSort();
    }
  }

  postDelivery(data: any){
    console.log(data);

    this.deliveriesApi.postDelivery(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.deliveriesGridData.push(res);
            this.newDelivery.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putDelivery(data: any){
    console.log(data);

    this.deliveriesApi.putDelivery(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.deliveriesGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteDelivery(){
    this.deliveriesApi.deleteDelivery(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.deliveriesGridData.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditDelivery(index: any){
    console.log(index);
    this.editDelivery.openModal(index, this.deliveriesGridData[index]);
  }

  confirmDelete(e: any){
    this.deleteIndex = e.index;
    this.deleteId = e.id;

    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
