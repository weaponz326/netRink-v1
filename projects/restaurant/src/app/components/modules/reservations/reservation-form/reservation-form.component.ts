import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  constructor() { }

  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;

  reservationForm: FormGroup = new FormGroup({});

  selectedCustomerId: any;

  ngOnInit(): void {
    this.initItemForm();
  }

  initItemForm(){
    this.reservationForm = new FormGroup({
      reservationCode: new FormControl(''),
      reservationDate: new FormControl(''),
      customerName: new FormControl(''),
      numberGuests: new FormControl(''),
      numberTables: new FormControl(''),
      arrivalDate: new FormControl(''),
      status: new FormControl(''),
    })
  }

  openCustomerWindow(){
    console.log("You are opening select customer window")
    this.selectCustomer.openModal();
  }

  onCustomerSelected(customerData: any){
    console.log(customerData);

    this.reservationForm.controls.customerName.setValue(customerData.data().customer_name);
    this.selectedCustomerId = customerData.id;
  }

}
