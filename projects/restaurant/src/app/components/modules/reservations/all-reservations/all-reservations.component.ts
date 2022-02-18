import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NewReservationComponent } from '../new-reservation/new-reservation.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';
import { ReservationsPrintService } from 'projects/restaurant/src/app/services/printing/reservations-print/reservations-print.service';


@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.scss']
})
export class AllReservationsComponent implements OnInit {

  constructor(
    private router: Router,
    private reservationsApi: ReservationsApiService,
    private reservationsPrint: ReservationsPrintService,
  ) { }

  @ViewChild('newReservationComponentReference', { read: NewReservationComponent, static: false }) newReservation!: NewReservationComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations" },
  ];

  reservationsGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
    this.getAccountReservation();
  }

  getAccountReservation(){
    this.isFetchingGridData = true;

    this.reservationsApi.getAccountReservation(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.reservationsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;
          if (!res.docs.length) this.isDataAvailable = false;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.reservationsApi.getAccountReservationNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.reservationsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.reservationsApi.getAccountReservationPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.reservationsGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountReservation();
  }

  viewReservation(reservationId: any){
    console.log(reservationId);

    sessionStorage.setItem("restaurant_reservation_id", reservationId);
    this.router.navigateByUrl("/home/reservations/view-reservation");
  }

  onPrint(){
    console.log("lets start printing...");
    this.reservationsPrint.printAllReservations();
  }

}
