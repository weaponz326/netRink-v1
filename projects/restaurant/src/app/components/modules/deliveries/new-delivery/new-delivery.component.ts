import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { DeliveryFormComponent } from '../delivery-form/delivery-form.component';


@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss']
})
export class NewDeliveryComponent implements OnInit {

  constructor() { }

  @Output() saveDeliveryEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('deliveryFormComponentReference', { read: DeliveryFormComponent, static: false }) deliveryForm!: DeliveryFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveDelivery(){
    let data = {
      account: localStorage.getDelivery('restaurant_id'),
      delivery_code: this.deliveryForm.deliveryForm.controls.deliveryCode.value,
      delivery_date: this.deliveryForm.deliveryForm.controls.deliveryDate.value,
      order_code: this.deliveryForm.deliveryForm.controls.orderCode.value,
      customer_name: this.deliveryForm.deliveryForm.controls.customerName.value,
      delivery_location: this.deliveryForm.deliveryForm.controls.deliveryLocation.value,
      delivery_status: this.deliveryForm.deliveryForm.controls.deliveryStatus.value,
    }

    this.saveDeliveryEvent.emit(data);
  }

  resetForm(){
    this.deliveryForm.deliveryForm.controls.deliveryCode.setValue('');
    this.deliveryForm.deliveryForm.controls.deliveryDate.setValue('');
    this.deliveryForm.deliveryForm.controls.orderCode.setValue('');
    this.deliveryForm.deliveryForm.controls.customerName.setValue('');
    this.deliveryForm.deliveryForm.controls.deliveryLocation.setValue('');
    this.deliveryForm.deliveryForm.controls.deliveryStatus.setValue('');
  }

}
