import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  rinkRef = this.afs.collection('personal/module_portal/personal_rink');
  personalUserRef = this.afs.collection('personal/users/personal_user');

  // rinks

  createRink(rink: any){
    return this.rinkRef.add(rink);
  }

  getRink(){
    return this.rinkRef.doc(String(sessionStorage.getItem('personal_rink_id'))).ref.get();
  }

  getUserRink(){
    return this.rinkRef.ref
      .where("sender.id", "==", localStorage.getItem('personal_id'))
      .where("recipient.id", "==", localStorage.getItem('personal_id'))
      .orderBy("created_at", "desc")
      .get();
  }

  // restaurant search

  getSearchResult(searchQuery: string, searchFilter: string){
    return this.personalUserRef.ref
      .where("last_name", ">=", searchQuery)
      .where("last_name", "<", searchQuery + "z")
      .get();
  }

  getSearchDetail(personalId: any){
    return this.personalUserRef.doc(personalId).ref.get();
  }

  // dashboard

  getWeekRinkIn(startDate: any, endDate: any){
    return this.rinkRef.ref
      .where("recipent.id", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<=", startDate).where("created_at", ">=", endDate)
      .get();
  }

  getWeekRinkOut(startDate: any, endDate: any){
    return this.rinkRef.ref
      .where("recipent.id", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<=", startDate).where("created_at", ">=", endDate)
      .get();
  }

}
