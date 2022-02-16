import { Component, OnInit, ViewChild } from '@angular/core';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
import { SelectTableComponent } from '../../../select-windows/tables-windows/select-table/select-table.component';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';

import { ReservationTable } from 'projects/restaurant/src/app/models/modules/reservations/reservations.model';


@Component({
  selector: 'app-reservation-tables',
  templateUrl: './reservation-tables.component.html',
  styleUrls: ['./reservation-tables.component.scss']
})
export class ReservationTablesComponent implements OnInit {

  constructor(private reservationsApi: ReservationsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  @ViewChild('selectTableComponentReference', { read: SelectTableComponent, static: false }) selectTable!: SelectTableComponent;

  reservationTablesGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  isFetchingGridData = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getReservationReservationTable();
  }

  getReservationReservationTable(){
    this.isFetchingGridData = true;

    this.reservationsApi.getReservationReservationTable()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;

          for (let table of res.docs) {
            this.reservationTablesGridData.push(table.data());
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createReservationTable(tableData: any){
    let data: ReservationTable = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      reservation: sessionStorage.getItem('restaurant_reservation_id') as string,
      table: {
        id: tableData.id,
        table_number: tableData.data().table_number,
        capacity: tableData.data().capacity,
      }
    }

    this.reservationsApi.createReservationTable(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.reservationTablesGridData.push(data);
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteReservationTable(){
    this.reservationsApi.deleteReservationTable(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.reservationTablesGridData.splice(this.deleteIndex, 1);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(index: any, id: any){
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

}
