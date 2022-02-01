import { Component, OnInit, ViewChild } from '@angular/core';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';

import { NewReservationComponent } from '../new-reservation/new-reservation.component'
import { EditReservationComponent } from '../edit-reservation/edit-reservation.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.scss']
})
export class AllReservationsComponent implements OnInit {

  constructor(private reservationsApi: ReservationsApiService) { }

  @ViewChild('newReservationComponentReference', { read: NewReservationComponent, static: false }) newReservation!: NewReservationComponent;
  @ViewChild('editReservationComponentReference', { read: EditReservationComponent, static: false }) editReservation!: EditReservationComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('reservationCodeSortingComponentReference', { read: TableSortingComponent, static: false }) reservationCodeSorting!: TableSortingComponent;
  @ViewChild('reservationDateSortingComponentReference', { read: TableSortingComponent, static: false }) reservationDateSorting!: TableSortingComponent;
  @ViewChild('customerNameSortingComponentReference', { read: TableSortingComponent, static: false }) customerNameSorting!: TableSortingComponent;
  @ViewChild('arrivalDateSortingComponentReference', { read: TableSortingComponent, static: false }) arrivalDateSorting!: TableSortingComponent;
  @ViewChild('statusSortingComponentReference', { read: TableSortingComponent, static: false }) statusSorting!: TableSortingComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations" },
  ];

  reservationsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalReservations = 0;

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getReservations();
  }

  getReservations(){
    this.reservationsApi.getReservations()
      .subscribe(
        res => {
          console.log(res);
          this.reservationsGridData = res;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalReservations = res.count;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any){
    console.log(field);
    this.getReservations();

    if((field == 'reservation_code') || (field == "-reservation_code")){
      this.reservationCodeSorting.resetSort();
    }
    else if((field == 'reservation_date') || (field == "-reservation_date")){
      this.reservationDateSorting.resetSort();
    }
    else if((field == 'customer_name') || (field == "-customer_name")){
      this.customerNameSorting.resetSort();
    }
    else if((field == 'arrival_date') || (field == "-arrival_date")){
      this.arrivalDateSorting.resetSort();
    }
    else if((field == 'status') || (field == "-status")){
      this.statusSorting.resetSort();
    }
  }

  postReservation(data: any){
    console.log(data);

    this.reservationsApi.postReservation(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.reservationsGridData.push(res);
            this.newReservation.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putReservation(data: any){
    console.log(data);

    this.reservationsApi.putReservation(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.reservationsGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteReservation(){
    this.reservationsApi.deleteReservation(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.reservationsGridData.splice(this.deleteIndex, 1);
        },
        err => {
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
  }

}
