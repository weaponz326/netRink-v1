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
      guestsNumber: new FormControl(''),
      tablesNumber: new FormControl(''),
      arrivalDate: new FormControl(''),
      status: new FormControl(''),
    })
  }

}
