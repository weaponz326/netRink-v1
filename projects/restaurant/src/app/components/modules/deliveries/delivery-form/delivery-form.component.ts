import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {

  constructor() { }

  deliveryForm: FormGroup = new FormGroup({});

  selectedOrderId: any;

  ngOnInit(): void {
    this.initItemForm();
  }

  initItemForm(){
    this.deliveryForm = new FormGroup({
      deliveryCode: new FormControl(''),
      dateDelivered: new FormControl(''),
      orderCode: new FormControl({value: '', disabled: true}),
      orderDate: new FormControl({value: '', disabled: true}),
      customerName: new FormControl({value: '', disabled: true}),
      deliveryLocation: new FormControl(''),
      deliveryStatus: new FormControl(''),
    })
  }

}
