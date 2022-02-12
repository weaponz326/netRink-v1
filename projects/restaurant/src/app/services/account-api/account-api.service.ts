import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  accountRef = this.afs.collection('restaurant/accounts/account');

  // extended profile

  createAccount(account: any){
    return this.accountRef.add(account);
  }

  getAccount(){
    return this.accountRef.doc(String(localStorage.getItem('restaurant_id'))).ref.get();
  }

  updateAccount(account: any){
    return this.accountRef.doc(String(localStorage.getItem('restaurant_id'))).update(account);
  }

  // TODO: move functionality to admin and remove
  getAllAccountAccount(){
    return this.accountRef.ref
      .where("account", "==", String(localStorage.getItem('restaurant_id')))
      .get();
  }

}
