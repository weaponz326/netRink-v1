import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { OrderItemsComponent } from '../order-items/order-items.component';


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
  @ViewChild('orderItemsComponentReference', { read: OrderItemsComponent, static: false }) orderItems!: OrderItemsComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/home/orders/all-orders" },
    { text: "View Order", url: "/home/orders/view-order" },
  ];

  orderForm: FormGroup = new FormGroup({});

  selectedCustomerId: any;

  isOrderSaving: boolean = false;
  isOrderDeleting: boolean = false;

  ngOnInit(): void {
    this.initOrderForm();
  }

  ngAfterViewInit(): void {
    this.getOrders();
  }

  initOrderForm(){
    this.orderForm = new FormGroup({
      orderCode: new FormControl(''),
      orderDate: new FormControl(''),
      orderType: new FormControl(''),
      orderStatus: new FormControl(''),
      customerName: new FormControl(''),
    })
  }

  getOrders(){
    this.ordersApi.getOrders()
      .subscribe(
        res => {
          console.log(res);

          this.orderForm.controls.orderCodeInput.setValue(res.order_code);
          this.orderForm.controls.orderDateTimePicker.setValue(res.order_date);
          this.orderForm.controls.orderTypeDropDownList.setValue(res.order_type);
          this.orderForm.controls.orderStatusDropDownList.setValue(res.order_status);

          this.selectedCustomerId = res.customer.id;
          this.orderForm.controls.customerNameInput.setValue(res.customer.customer_name);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putOrder(){
    let orderData = {
      account: localStorage.getItem('restaurant_id'),
      order_code: this.orderForm.controls.orderCode.value,
      order_date: this.orderForm.controls.orderDate.value,
      customer_name: this.orderForm.controls.customerName.value,
      order_type: this.orderForm.controls.orderType.value,
      order_status: this.orderForm.controls.orderStatus.value,
      customer: this.selectedCustomerId,
    }

    console.log(orderData);
    this.isOrderSaving = true;

    this.ordersApi.putOrder(orderData)
      .subscribe(
        res => {
          console.log(res);
          this.isOrderSaving = false;
        },
        err => {
          console.log(err);
          this.isOrderSaving = false;
          this.connectionToast.openToast();
        }
      )

    console.log(orderData);
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteOrder(){
    this.isOrderDeleting = true;

    this.ordersApi.deleteOrder()
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/home/orders/all-orders');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
