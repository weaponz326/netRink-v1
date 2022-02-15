import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  staffRef = this.afs.collection('restaurant/module_staff/restaurant_staff');

  // staff

  createStaff(staff: any){
    return this.staffRef.add(staff);
  }

  getStaff(){
    return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).ref.get();
  }

  updateStaff(staff: any){
    return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).update(staff);
  }

  deleteStaff(){
    return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).delete();
  }

  getAccountStaff(sorting: any, pageSize: any){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountStaffNext(sorting: any, pageSize: any, pageStart: any){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountStaffPrev(sorting: any, pageSize: any, pageStart: any){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountStaff(){
    return this.staffRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

}
