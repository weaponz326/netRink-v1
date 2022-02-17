import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private afs: AngularFirestore) { }

  userRef = this.afs.collection('personal/users/personal_user');

  createUser(userId:any, userData: any){
    return this.userRef.doc(userId).set(userData);
  }

  updateUser(userData: any){
    return this.userRef.doc(String(localStorage.getItem('personal_id'))).update(userData);
  }

  getUser(){
    return this.userRef.doc(String(localStorage.getItem('personal_id'))).ref.get();
  }

}
