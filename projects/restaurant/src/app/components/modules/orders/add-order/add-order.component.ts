import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';
import { SelectTableComponent } from '../../../select-windows/tables-windows/select-table/select-table.component';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';

import { Order } from 'projects/restaurant/src/app/models/modules/orders/orders.model';
import { Delivery } from 'projects/restaurant/src/app/models/modules/deliveries/deliveries.model';
import { Table } from 'projects/restaurant/src/app/models/modules/tables/tables.model';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService,
    private deliveriesApi: DeliveriesApiService
  ) { }

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;
  @ViewChild('selectTableComponentReference', { read: SelectTableComponent, static: false }) selectTable!: SelectTableComponent;

  orderForm: FormGroup = new FormGroup({});

  selectedCustomerId = "";
  selectedTableId = "";

  isOrderSaving = false;

  ngOnInit(): void {
    this.initOrderForm();
  }

  openModal(){
    this.newButton.nativeElement.click();
    this.orderForm.controls.orderDate.setValue(new Date().toISOString().slice(0, 16))
  }

  initOrderForm(){
    this.orderForm = new FormGroup({
      orderCode: new FormControl(''),
      orderDate: new FormControl(''),
      customerName: new FormControl(''),
      orderType: new FormControl(''),
      tableNumber: new FormControl({value: '', disabled: true}),
    })
  }

  createOrder(){
    let data: Order = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      order_code: this.orderForm.controls.orderCode.value,
      order_date: this.orderForm.controls.orderDate.value,
      order_type: this.orderForm.controls.orderType.value,
      total_amount: 0,
      order_status: "",
      customer: {
        id: this.selectedCustomerId,
        customer_name: this.orderForm.controls.customerName.value,
      },
      table: {
        id: this.selectedTableId,
        table_number: this.orderForm.controls.tableNumber.value,
      }
    }

    console.log(data);
    this.isOrderSaving = true;

    this.ordersApi.createOrder(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('restaurant_order_id', res.id);

            if (data.order_type == "Delivery"){
              this.createDelivery();
            }

            this.dismissButton.nativeElement.click();
            this.isOrderSaving = false;
            this.router.navigateByUrl('/home/orders/view-order');
          }
        },
        (err: any) => {
          console.log(err);
          this.isOrderSaving = false;
          this.connectionToast.openToast();
        }
      )

    console.log(data);
  }

  openCustomerWindow(){
    console.log("You are opening select customer window")
    this.selectCustomer.openModal();
  }

  onCustomerSelected(customerData: any){
    console.log(customerData);

    this.orderForm.controls.customerName.setValue(customerData.data().customer_name);
    this.selectedCustomerId = customerData.id;
  }

  openTableWindow(){
    console.log("You are opening select table window")
    this.selectTable.openModal();
  }

  onTableSelected(tableData: any){
    console.log(tableData);

    this.selectedTableId = tableData.id;
    this.orderForm.controls.tableNumber.setValue(tableData.data().table_number);
  }

  createDelivery(){
    let data: Delivery = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      delivery_code: "",
      delivery_date: "",
      delivery_location: "",
      delivery_status: "",
      order: {
        id: sessionStorage.getItem('restaurant_order_id') as string,
        order_code: this.orderForm.controls.orderCode.value,
        order_date: this.orderForm.controls.orderDate.value,
        customer: {
          id: this.selectedCustomerId,
          customer_name: this.orderForm.controls.customerName.value
        }
      },
    }

    this.deliveriesApi.createDelivery(data)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    console.log(data);
  }

}
