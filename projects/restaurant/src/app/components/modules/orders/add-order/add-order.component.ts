import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService
  ) { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  orderForm: FormGroup = new FormGroup({});

  selectedCustomerId: any;

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
    })
  }

  postOrder(){
    let orderData = {
      account: localStorage.getItem('restaurant_id'),
      order_code: this.orderForm.controls.orderCode.value,
      order_date: this.orderForm.controls.orderDate.value,
      customer: this.selectedCustomerId,
      customer_name: this.orderForm.controls.customerName.value,
      order_type: this.orderForm.controls.orderType.value,
    }

    this.ordersApi.postOrder(orderData)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('restaurant_order_id', res.id);
            this.router.navigateByUrl('/home/orders/view-order');
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )

    console.log(orderData);
  }

}
