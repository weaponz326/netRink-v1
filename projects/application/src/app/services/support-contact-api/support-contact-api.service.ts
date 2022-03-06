import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SupportContactApiService {

  constructor(private afs: AngularFirestore) { }

  supportRef = this.afs.collection('application/support/support_contact');

  createSupportContact(data: any){
    return this.supportRef.add(data);
  }

}
