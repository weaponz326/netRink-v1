import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private firestore: AngularFirestore) { }

  createUser(user: any){
    return this.firestore.collection('personal/users').doc(user.uid).set(user);
  }

  updateUser(user: any){
    return this.firestore.collection('personal/users').doc(user.uid).update(user);
  }

  getUser(userId: any){
    return this.firestore.collection('personal/users').doc(userId).get();
  }

}
