import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DeliveriesApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  deliveryRef = this.afs.collection('restaurant/module_deliveries/restaurant_delivery');

  // deliveries

  createDelivery(deliveryData: any){
    return this.deliveryRef.add(deliveryData);
  }

  getDelivery(deliveryId: any){
    return this.deliveryRef.doc(deliveryId).ref.get();
  }

  updateDelivery(deliveryId: any, deliveryData: any){
    return this.deliveryRef.doc(deliveryId).update(deliveryData);
  }

  deleteDelivery(deliveryId: any){
    return this.deliveryRef.doc(deliveryId).delete();
  }

  getAccountDelivery(sorting: any, pageSize: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountDeliveryNext(sorting: any, pageSize: any, pageStart: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountDeliveryPrev(sorting: any, pageSize: any, pageStart: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountDelivery(){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

}
