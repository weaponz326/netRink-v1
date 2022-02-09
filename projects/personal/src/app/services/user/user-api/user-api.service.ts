import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private firestore: AngularFirestore) { }

  userRef = this.firestore.collection('personal');
  personalId = localStorage.getItem('personal_id') as string;

  createUser(user: any){
    return this.userRef.doc(user.uid).set(user);
  }

  updateUser(user: any){
    return this.userRef.doc(user.uid).update(user);
  }

  getUser(){
    return this.userRef.doc(this.personalId).ref.get();
  }

}
