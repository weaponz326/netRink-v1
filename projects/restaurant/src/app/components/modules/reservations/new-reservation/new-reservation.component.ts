import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { ReservationFormComponent } from '../reservation-form/reservation-form.component';


@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent implements OnInit {

  constructor() { }

  @Output() saveReservationEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('reservationFormComponentReference', { read: ReservationFormComponent, static: false }) reservationForm!: ReservationFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveReservation(){
    let data = {
      account: localStorage.getReservation('restaurant_id'),
      reservation_code: this.reservationForm.reservationForm.controls.reservationCode.value,
      reservation_date: this.reservationForm.reservationForm.controls.reservationDate.value,
      customer_name: this.reservationForm.reservationForm.controls.customerName.value,
      number_guests: this.reservationForm.reservationForm.controls.numberGuests.value,
      number_tables: this.reservationForm.reservationForm.controls.numberTables.value,
      arrival_date: this.reservationForm.reservationForm.controls.arrivalDate.value,
      status: this.reservationForm.reservationForm.controls.status.value,
    }

    this.saveReservationEvent.emit(data);
  }

  resetForm(){
    this.reservationForm.reservationForm.controls.reservationCode.setValue('');
    this.reservationForm.reservationForm.controls.reservationDate.setValue('');
    this.reservationForm.reservationForm.controls.customerName.setValue('');
    this.reservationForm.reservationForm.controls.numberGuests.setValue('');
    this.reservationForm.reservationForm.controls.numberTables.setValue('');
    this.reservationForm.reservationForm.controls.arrivalDate.setValue('');
    this.reservationForm.reservationForm.controls.status.setValue('');
  }

}
