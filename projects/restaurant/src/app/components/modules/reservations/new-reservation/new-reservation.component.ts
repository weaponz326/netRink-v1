import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';

import { Reservation } from 'projects/restaurant/src/app/models/modules/reservations/reservations.model';


@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent implements OnInit {

  constructor(
    private router: Router,
    private reservationsApi: ReservationsApiService
  ) { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
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
      arrivalDate: new FormControl(''),
      status: new FormControl(''),
    })
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  createReservation(){
    let data: Reservation = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      reservation_code: this.reservationForm.controls.reservationCode.value,
      reservation_date: this.reservationForm.controls.reservationDate.value,
      number_guests: null,
      number_tables: null,
      arrival_date: this.reservationForm.controls.arrivalDate.value,
      status: this.reservationForm.controls.status.value,
      customer: {
        id: this.selectedCustomerId,
        customer_name: this.reservationForm.controls.customerName.value,
      }
    }

    this.reservationsApi.createReservation(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('restaurant_reservation_id', res.id);
          this.router.navigateByUrl('/home/reservations/view-reservation')
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

    this.reservationForm.controls.customerName.setValue(customerData.data().customer_name);
    this.selectedCustomerId = customerData.id;
  }

}
