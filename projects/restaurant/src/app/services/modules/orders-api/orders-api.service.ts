import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  orderRef = this.afs.collection('restaurant/module_orders/restaurant_order');
  orderItemRef = this.afs.collection('restaurant/module_orders/restaurant_order_item');

  // orders

  createOrder(order: any){
    return this.orderRef.add(order);
  }

  getOrder(){
    return this.orderRef.doc(String(sessionStorage.getItem('restaurant_order_id'))).ref.get();
  }

  updateOrder(order: any){
    return this.orderRef.doc(String(sessionStorage.getItem('restaurant_order_id'))).update(order);
  }

  deleteOrder(){
    return this.orderRef.doc(String(sessionStorage.getItem('restaurant_order_id'))).delete();
  }

  getAccountOrder(sorting: any, pageSize: any){
    return this.orderRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountOrderNext(sorting: any, pageSize: any, pageStart: any){
    return this.orderRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountOrderPrev(sorting: any, pageSize: any, pageStart: any){
    return this.orderRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountOrder(){
    return this.orderRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // order items

  createOrderItem(orderItem: any){
    return this.orderItemRef.add(orderItem);
  }

  getOrderItem(orderItemData: any){
    return this.orderItemRef.doc(orderItemData).ref.get();
  }

  updateOrderItem(orderItemId: any, orderItemData: any){
    return this.orderItemRef.doc(orderItemId).update(orderItemData);
  }

  deleteOrderItem(orderItemId: any){
    return this.orderItemRef.doc(orderItemId).delete();
  }

  getOrderOrderItem(){
    return this.orderItemRef.ref
      .where("order", "==", sessionStorage.getItem('restaurant_order_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

}
