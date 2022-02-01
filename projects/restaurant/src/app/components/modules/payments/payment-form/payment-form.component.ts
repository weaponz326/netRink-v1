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
  }

  initStaffForm(){
    this.paymentForm = new FormGroup({
      paymentCode: new FormControl(''),
      paymentDate: new FormControl(''),
      orderCode: new FormControl(''),
      totalAmount: new FormControl(''),
      amountPaid: new FormControl(''),
      balance: new FormControl(''),
    })
  }

  onOrderSelected(orderData: any){
    console.log(orderData);

    this.selectedOrderId = orderData.id;
    this.paymentForm.controls.orderCode.setValue(orderData.order_code);
    this.paymentForm.controls.totalAmount.setValue(orderData.total_amount);
  }

}
