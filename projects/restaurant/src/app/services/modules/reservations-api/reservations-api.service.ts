import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReservationsApiService {

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
    private endpoints: EndpointsService
  ) { }

  reservationRef = this.afs.collection('restaurant/module_reservations/restaurant_reservation');

  // reservations

  createReservation(reservationData: any){
    return this.reservationRef.add(reservationData);
  }

  getReservation(reservationId: any){
    return this.reservationRef.doc(reservationId).ref.get();
  }

  updateReservation(reservationId: any, reservationData: any){
    return this.reservationRef.doc(reservationId).update(reservationData);
  }

  deleteReservation(reservationId: any){
    return this.reservationRef.doc(reservationId).delete();
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

}
