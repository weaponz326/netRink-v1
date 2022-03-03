import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { ReservationTablesComponent } from '../reservation-tables/reservation-tables.component';
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';
import { ReservationsPrintService } from 'projects/restaurant/src/app/services/printing/reservations-print/reservations-print.service';

import { Reservation } from 'projects/restaurant/src/app/models/modules/reservations/reservations.model';


@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.scss']
})
export class ViewReservationComponent implements OnInit {

  constructor(
    private router: Router,
    private reservationsApi: ReservationsApiService,
    private reservationsPrint: ReservationsPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('reservationTablesComponentReference', { read: ReservationTablesComponent, static: false }) reservationTables!: ReservationTablesComponent;
  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations" },
    { text: "View Reservation", url: "/home/reservations/view-reservation" },
  ];

  reservationForm: FormGroup = new FormGroup({});
  reservationFormData: any;

  selectedCustomerId: any;
  selectedTableId: any;

  isReservationLoading: boolean = false;
  isReservationSaving: boolean = false;
  isReservationDeleting: boolean = false;

  ngOnInit(): void {
    this.initReservationForm();
    this.getReservation();
  }

  initReservationForm(){
    this.reservationForm = new FormGroup({
      reservationCode: new FormControl(''),
      reservationDate: new FormControl(''),
      customerName: new FormControl(''),
      arrivalDate: new FormControl(''),
      numberGuests: new FormControl(''),
      numberTables: new FormControl(''),
      status: new FormControl(''),
    })
  }

  getReservation(){
    this.isReservationLoading = true;

    this.reservationsApi.getReservation()
      .then(
        (res: any) => {
          console.log(res);
          this.reservationFormData = res;
          this.isReservationLoading = false;

          this.reservationForm.controls.reservationCode.setValue(this.reservationFormData.data().reservation_code);
          this.reservationForm.controls.reservationDate.setValue(this.reservationFormData.data().reservation_date);
          this.reservationForm.controls.arrivalDate.setValue(this.reservationFormData.data().arrival_date);
          this.reservationForm.controls.status.setValue(this.reservationFormData.data().status);
          this.reservationForm.controls.numberGuests.setValue(this.reservationFormData.data().number_guests);
          this.reservationForm.controls.numberTables.setValue(this.reservationFormData.data().number_tables);

          this.selectedCustomerId = this.reservationFormData.data().customer.id;
          this.reservationForm.controls.customerName.setValue(this.reservationFormData.data().customer.customer_name);
        },
        (err: any) => {
          console.log(err);
          this.isReservationLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateReservation(){
    let data = {
      reservation_code: this.reservationForm.controls.reservationCode.value,
      reservation_date: this.reservationForm.controls.reservationDate.value,
      number_guests: this.reservationForm.controls.numberGuests.value,
      number_tables: this.reservationForm.controls.numberTables.value,
      arrival_date: this.reservationForm.controls.arrivalDate.value,
      status: this.reservationForm.controls.status.value,
      customer: {
        id: this.selectedCustomerId,
        customer_name: this.reservationForm.controls.customerName.value,
      }
    }

    console.log(data);
    this.isReservationSaving = true;

    this.reservationsApi.updateReservation(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isReservationSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isReservationSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.thisEvent = 1;
    this.deleteModal.openModal();
  }

  deleteReservation(){
    this.isReservationDeleting = true;

    this.reservationsApi.deleteReservation()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/reservations/all-reservations');
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

  onPrint(){
    console.log("lets start printing...");
    this.reservationsPrint.printViewReservation();
  }

}
