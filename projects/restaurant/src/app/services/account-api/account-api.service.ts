import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  accountRef = this.afs.collection('restaurant');

  restaurantId = localStorage.getItem('restaurant_id') as string;

  // extended profile

  createAccount(account: any){
    return this.accountRef.add(account);
  }

  getAccount(){
    return this.accountRef.doc(this.restaurantId).ref.get();
  }

  updateAccount(account: any){
    return this.accountRef.doc(this.restaurantId).update(account);
  }

  getAllAccountAccount(){
    return this.accountRef.ref
      .where("account", "==", this.restaurantId)
      .get();
  }

}
