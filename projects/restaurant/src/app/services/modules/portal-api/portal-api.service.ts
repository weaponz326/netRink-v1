import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  rinkRef = this.afs.collection('personal/portal/rink');
  personalUserRef = this.afs.collection('personal');
  restaurantAccountRef = this.afs.collection('restaurant');

  personalId = localStorage.getItem('personal_id') as string;
  restaurantId = localStorage.getItem('restaurant_id') as string;
  rinkId = sessionStorage.getItem('restaurant_rink_id') as string;

  // rinks

  createRink(rink: any){
    return this.rinkRef.add(rink);
  }

  getRink(){
    return this.rinkRef.doc(this.rinkId).ref.get();
  }

  getAllRink(pageSize: any, pageStart: any){
    return this.rinkRef.ref
      .where("sender", "==", this.personalId)
      .where("recipent", "==", this.personalId)
      .orderBy("rink_date", "desc")
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  // restaurant search

  getSearchResult(searchQuery: string, searchFilter: string){
    return this.restaurantAccountRef.ref
      .orderBy('accounts')
      .startAt(searchQuery)
      .startAt(searchQuery + '\uf8ff')
      .get();
  }

  getSearchDetail(restaurantId: any){
    return this.restaurantAccountRef.doc(restaurantId).ref.get();
  }

}
