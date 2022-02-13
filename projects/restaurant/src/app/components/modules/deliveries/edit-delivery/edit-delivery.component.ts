import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { DeliveryFormComponent } from '../delivery-form/delivery-form.component';


@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.scss']
})
export class EditDeliveryComponent implements OnInit {

  constructor() { }

  @Output() saveDeliveryEvent = new EventEmitter<any>();
  @Output() deleteDeliveryEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('deliveryFormComponentReference', { read: DeliveryFormComponent, static: false }) deliveryForm!: DeliveryFormComponent;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.deliveryForm.deliveryForm.controls.deliveryCode.setValue(data.delivery_code);
    this.deliveryForm.deliveryForm.controls.deliveryDate.setValue(data.delivery_date);
    this.deliveryForm.deliveryForm.controls.orderCode.setValue(data.order_code);
    this.deliveryForm.deliveryForm.controls.customerName.setValue(data.customer_name);
    this.deliveryForm.deliveryForm.controls.deliveryLocation.setValue(data.delivery_location);
    this.deliveryForm.deliveryForm.controls.deliveryStatus.setValue(data.delivery_status);

    this.buttonElement.nativeElement.click();
  }

  saveDelivery(){
    let delivery = {
      delivery_code: this.deliveryForm.deliveryForm.controls.deliveryCode.value,
      delivery_date: this.deliveryForm.deliveryForm.controls.deliveryDate.value,
      delivery_location: this.deliveryForm.deliveryForm.controls.deliveryLocation.value,
      delivery_status: this.deliveryForm.deliveryForm.controls.deliveryStatus.value,
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      delivery: delivery
    }

    this.saveDeliveryEvent.emit(data);
  }

  deleteDelivery(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
    }

    this.deleteDeliveryEvent.emit(data);
  }

}
