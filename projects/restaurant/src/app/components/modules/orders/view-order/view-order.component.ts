import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { OrderItemsComponent } from '../order-items/order-items.component';
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';

import { Order } from 'projects/restaurant/src/app/models/modules/orders/orders.model';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('orderItemsComponentReference', { read: OrderItemsComponent, static: false }) orderItems!: OrderItemsComponent;

  @ViewChild('selectCustomerComponentComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders" },
    { text: "View Order", url: "/home/orders/view-order" },
  ];

  orderForm: FormGroup = new FormGroup({});
  orderFormData: any;

  selectedCustomerId: any;

  isOrderSaving: boolean = false;
  isOrderDeleting: boolean = false;

  ngOnInit(): void {
    this.initOrderForm();
  }

  ngAfterViewInit(): void {
    this.getOrder();
  }

  initOrderForm(){
    this.orderForm = new FormGroup({
      orderCode: new FormControl(''),
      orderDate: new FormControl(''),
      orderType: new FormControl(''),
      orderStatus: new FormControl(''),
      customerName: new FormControl(),
    })
  }

  getOrder(){
    this.ordersApi.getOrder()
      .then(
        (res: any) => {
          console.log(res);
          this.orderFormData = res;

          this.orderForm.controls.orderCode.setValue(this.orderFormData.data().order_code);
          this.orderForm.controls.orderDate.setValue(this.orderFormData.data().order_date);
          this.orderForm.controls.orderType.setValue(this.orderFormData.data().order_type);
          this.orderForm.controls.orderStatus.setValue(this.orderFormData.data().order_status);

          this.selectedCustomerId = this.orderFormData.data().customer.id;
          this.orderForm.controls.customerName.setValue(this.orderFormData.data().customer.customer_name);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateOrder(){
    let data: Order = {
      created_at: this.orderFormData.created_at,
      account: localStorage.getItem('restaurant_id') as string,
      order_code: this.orderForm.controls.orderCode.value,
      order_date: this.orderForm.controls.orderDate.value,
      order_type: this.orderForm.controls.orderType.value,
      order_status: this.orderForm.controls.orderStatus.value,
      total_amount: this.orderItems.totalAmount,
      customer: {
        id: this.selectedCustomerId,
        customer_name: this.orderForm.controls.customerName.value,
      }
    }

    console.log(data);
    this.isOrderSaving = true;

    this.ordersApi.updateOrder(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isOrderSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isOrderSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteOrder(){
    this.isOrderDeleting = true;

    this.ordersApi.deleteOrder()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/orders/all-orders');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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

  onPrint(){
    console.log("lets start printing...");
  }

}
