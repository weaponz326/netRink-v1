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
    return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_order_id"))).set(deliveryData);
  }

  getDelivery(){
    return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_delivery_id"))).ref.get();
  }

  updateDelivery(deliveryData: any){
    return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_delivery_id"))).update(deliveryData);
  }

  deleteDelivery(){
    return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_delivery_id"))).delete();
  }

  getAccountDelivery(sorting: any, pageSize: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountDeliveryNext(sorting: any, pageSize: any, pageStart: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountDeliveryPrev(sorting: any, pageSize: any, pageStart: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountDelivery(){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy("created_at", "desc")
      .get();
  }

  // dashboard

  getWeekDelivery(startDate: any, endDate: any){
    return this.deliveryRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

}
