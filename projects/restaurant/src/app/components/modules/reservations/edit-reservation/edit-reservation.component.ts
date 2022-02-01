import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { ReservationFormComponent } from '../reservation-form/reservation-form.component';


@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss']
})
export class EditReservationComponent implements OnInit {

  constructor() { }

  @Output() saveReservationEvent = new EventEmitter<any>();
  @Output() deleteReservationEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('reservationFormComponentReference', { read: ReservationFormComponent, static: false }) reservationForm!: ReservationFormComponent;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.reservationForm.reservationForm.controls.reservationCode.setValue(data.reservation_code);
    this.reservationForm.reservationForm.controls.reservationDate.setValue(data.reservation_date);
    this.reservationForm.reservationForm.controls.customerName.setValue(data.customer_name);
    this.reservationForm.reservationForm.controls.numberGuests.setValue(data.number_guests);
    this.reservationForm.reservationForm.controls.numberTables.setValue(data.number_tables);
    this.reservationForm.reservationForm.controls.arrivalDate.setValue(data.arrival_date);
    this.reservationForm.reservationForm.controls.status.setValue(data.status);

    this.buttonElement.nativeElement.click();
  }

  saveReservation(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,

      account: localStorage.getReservation('restaurant_id'),
      reservation_code: this.reservationForm.reservationForm.controls.reservationCode.value,
      reservation_date: this.reservationForm.reservationForm.controls.reservationDate.value,
      customer_name: this.reservationForm.reservationForm.controls.customerName.value,
      number_guests: this.reservationForm.reservationForm.controls.numberGuests.value,
      number_tables: this.reservationForm.reservationForm.controls.numberTables.value,
      arrival_date: this.reservationForm.reservationForm.controls.arrivalDate.value,
      status: this.reservationForm.reservationForm.controls.status.value,
    }

    this.deleteReservationEvent.emit(data);
  }

  deleteReservation(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
    }

    this.deleteReservationEvent.emit(data);
  }

}
