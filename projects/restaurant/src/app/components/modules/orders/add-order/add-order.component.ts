import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';
import { SelectTableComponent } from '../../../select-windows/tables-windows/select-table/select-table.component';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';

import { Order } from 'projects/restaurant/src/app/models/modules/orders/orders.model';
import { Delivery } from 'projects/restaurant/src/app/models/modules/deliveries/deliveries.model';


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

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;
  @ViewChild('selectTableComponentReference', { read: SelectTableComponent, static: false }) selectTable!: SelectTableComponent;

  orderForm: FormGroup = new FormGroup({});

  selectedCustomerId = "";
  selectedTableId = "";

  ngOnInit(): void {
    this.initOrderForm();
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  initOrderForm(){
    this.orderForm = new FormGroup({
      orderCode: new FormControl(''),
      orderDate: new FormControl(''),
      customerName: new FormControl(''),
      orderType: new FormControl(''),
      tableNumber: new FormControl(''),
    })
  }

  createOrder(){
    let data: Order = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
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

    this.ordersApi.createOrder(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('restaurant_order_id', res.id);

            if (data.order_type == "Delivery"){
              this.createDelivery();
            }

            this.router.navigateByUrl('/home/orders/view-order');
          }
        },
        (err: any) => {
          console.log(err);
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

    this.orderForm.controls.tableNumber.setValue(tableData.data().table_number);
    this.selectedTableId = tableData.id;
  }

  createDelivery(){
    let data: Delivery = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      delivery_code: "",
      delivery_date: "",
      delivery_location: "",
      delivery_status: "",
      order: {
        id: sessionStorage.getItem('restaurant_order_id') as string,
        order_code: this.orderForm.controls.orderCode.value,
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
