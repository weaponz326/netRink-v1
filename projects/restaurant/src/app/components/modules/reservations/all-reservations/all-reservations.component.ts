import { Component, OnInit, ViewChild } from '@angular/core';

import { NewReservationComponent } from '../new-reservation/new-reservation.component'
import { EditReservationComponent } from '../edit-reservation/edit-reservation.component'
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
    private reservationsApi: ReservationsApiService,
    private reservationsPrint: ReservationsPrintService,
  ) { }

  @ViewChild('newReservationComponentReference', { read: NewReservationComponent, static: false }) newReservation!: NewReservationComponent;
  @ViewChild('editReservationComponentReference', { read: EditReservationComponent, static: false }) editReservation!: EditReservationComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations" },
  ];

  reservationsGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = false;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccountReservation();
  }

  getAccountReservation(){
    this.isFetchingGridData = true;

    this.reservationsApi.getAccountReservation(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);

          for (let item of res.docs) {
            this.reservationsGridData.push(item.data());
          }

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          this.disableNext = false;
          this.disablePrev = true;
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

          for (let item of res.docs) {
            this.reservationsGridData.push(item.data());
          }

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

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

          for (let item of res.docs) {
            this.reservationsGridData.push(item.data());
          }

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

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

  createReservation(data: any){
    console.log(data);

    this.reservationsApi.createReservation(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.reservationsGridData.push(data);
            this.newReservation.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateReservation(data: any){
    console.log(data);

    this.reservationsApi.updateReservation(data.id, data.reservation)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.reservationsGridData[data.index] = data.reservation;
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteReservation(){
    this.reservationsApi.deleteReservation(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.reservationsGridData.splice(this.deleteIndex, 1);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditReservation(index: any){
    console.log(index);
    this.editReservation.openModal(index, this.reservationsGridData[index]);
  }

  confirmDelete(e: any){
    this.deleteIndex = e.index;
    this.deleteId = e.id;

    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
    this.reservationsPrint.printAllReservations();
  }

}
