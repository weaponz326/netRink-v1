import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  customerRef = this.afs.collection('restaurant/module_customers/restaurant_customer');

  // customers

  createCustomer(customer: any){
    return this.customerRef.add(customer);
  }

  getCustomer(){
    return this.customerRef.doc(String(sessionStorage.getItem('restaurant_customer_id'))).ref.get();
  }

  updateCustomer(customer: any){
    return this.customerRef.doc(String(sessionStorage.getItem('restaurant_customer_id'))).update(customer);
  }

  deleteCustomer(){
    return this.customerRef.doc(String(sessionStorage.getItem('restaurant_customer_id'))).delete();
  }

  getAccountCustomer(sorting: any, pageSize: any){
    return this.customerRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountCustomerNext(sorting: any, pageSize: any, pageStart: any){
    return this.customerRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountCustomerPrev(sorting: any, pageSize: any, pageStart: any){
    return this.customerRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountCustomer(){
    return this.customerRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_by" ,"desc")
      .get();
  }

  // dashboard

  getWeekCustomer(startDate: any, endDate: any){
    return this.customerRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

}
