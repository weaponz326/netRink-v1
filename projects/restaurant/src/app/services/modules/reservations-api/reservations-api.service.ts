import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReservationsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  reservationRef = this.afs.collection('restaurant/module_reservations/restaurant_reservation');
  reservationTableRef = this.afs.collection('restaurant/module_reservations/restaurant_reservation_table');

  // reservations

  createReservation(reservation: any){
    return this.reservationRef.add(reservation);
  }

  getReservation(){
    return this.reservationRef.doc(String(sessionStorage.getItem('restaurant_reservation_id'))).ref.get();
  }

  updateReservation(reservation: any){
    return this.reservationRef.doc(String(sessionStorage.getItem('restaurant_reservation_id'))).update(reservation);
  }

  deleteReservation(){
    return this.reservationRef.doc(String(sessionStorage.getItem('restaurant_reservation_id'))).delete();
  }

  getAccountReservation(sorting: any, pageSize: any){
    return this.reservationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountReservationNext(sorting: any, pageSize: any, pageStart: any){
    return this.reservationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountReservationPrev(sorting: any, pageSize: any, pageStart: any){
    return this.reservationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountReservation(){
    return this.reservationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy("created_at" ,"desc")
      .get();
  }

  // reservation tables

  createReservationTable(reservationTableData: any){
    return this.reservationTableRef.add(reservationTableData);
  }

  getReservationTable(reservationTableId: any){
    return this.reservationTableRef.doc(reservationTableId).ref.get();
  }

  updateReservationTable(reservationTableId: any, reservationTableData: any){
    return this.reservationTableRef.doc(reservationTableId).update(reservationTableData);
  }

  deleteReservationTable(reservationTableId: any){
    return this.reservationTableRef.doc(reservationTableId).delete();
  }

  getReservationReservationTable(){
    return this.reservationTableRef.ref
      .where("reservation", "==", sessionStorage.getItem('restaurant_reservation_id'))
      .orderBy("created_at", "desc")
      .get();
  }

}
