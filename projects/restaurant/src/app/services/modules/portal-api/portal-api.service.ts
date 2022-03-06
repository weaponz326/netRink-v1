import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  rinkRef = this.afs.collection('restaurant/module_portal/restaurant_rink');
  personalUserSearchRef = this.afs.collection('personal/users/user');
  restaurantAccountSearchRef = this.afs.collection('restaurant/accounts/account');

  // rinks

  createRink(rink: any){
    return this.rinkRef.add(rink);
  }

  getRink(){
    return this.rinkRef.doc(String(sessionStorage.getItem('restaurant_rink_id'))).ref.get();
  }

  getAccountRink(){
    return this.rinkRef.ref
      .where("sender.id", "==", String(localStorage.getItem('restaurant_id')))
      .where("recipent.id", "==", String(localStorage.getItem('restaurant_id')))
      .orderBy("created_at", "desc")
      .get();
  }

  // restaurant search

  getSearchResult(searchQuery: string, searchFilter: string){
    return this.restaurantAccountSearchRef.ref
      .where("name", ">=", searchQuery)
      .where("name", "<", searchQuery + "z")
      .get();
  }

  getSearchDetail(restaurantId: any){
    return this.restaurantAccountSearchRef.doc(restaurantId).ref.get();
  }

  // dashboard

  getWeekRinkIn(startDate: any, endDate: any){
    return this.rinkRef.ref
      .where("recipent.id", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

  getWeekRinkOut(startDate: any, endDate: any){
    return this.rinkRef.ref
      .where("recipent.id", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

}
