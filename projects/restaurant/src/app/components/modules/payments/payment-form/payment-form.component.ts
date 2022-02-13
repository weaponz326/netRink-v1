import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectOrderComponent } from '../../../select-windows/orders-windows/select-order/select-order.component';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  @ViewChild('selectOrderComponentReference', { read: SelectOrderComponent, static: false }) selectOrder!: SelectOrderComponent;

  paymentForm: FormGroup = new FormGroup({});

  selectedOrderId: any;

  ngOnInit(): void {
    this.initPaymentForm();
  }

  initPaymentForm(){
    this.paymentForm = new FormGroup({
      paymentCode: new FormControl(''),
      paymentDate: new FormControl(''),
      orderCode: new FormControl(''),
      customerName: new FormControl(''),
      totalAmount: new FormControl(0),
      amountPaid: new FormControl(''),
      balance: new FormControl(''),
    })
  }

  onOrderSelected(orderData: any){
    console.log(orderData);

    this.selectedOrderId = orderData.id;
    this.paymentForm.controls.orderCode.setValue(orderData.data().order_code);
    this.paymentForm.controls.customerName.setValue(orderData.data().customer.customer_name);
    this.paymentForm.controls.totalAmount.setValue(orderData.data().total_amount);
  }

  openOrderWindow(){
    console.log("You are opening select order window")
    this.selectOrder.openModal();
  }

  setBalance(){
    this.paymentForm.controls.balance.setValue(
      this.paymentForm.controls.totalAmount.value - this.paymentForm.controls.amountPaid.value
    )
  }

}
