import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  extendedProfileRef = this.afs.collection('school/module_settings/school_extended_profile');
  subscriptionRef = this.afs.collection('school/module_settings/school_subscription');

  // extended profile

  createExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(String(localStorage.getItem('school_id'))).set(extendedProfile);
  }

  getExtendedProfile(){
    return this.extendedProfileRef.doc(String(localStorage.getItem('school_id'))).ref.get();
  }

  updateExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(String(localStorage.getItem('school_id'))).update(extendedProfile);
  }

  // subscription

  createSubscription(subscription: any){
    return this.subscriptionRef.doc(String(localStorage.getItem('school_id'))).set(subscription);
  }

  getSubscription(){
    return this.subscriptionRef.doc(String(localStorage.getItem('school_id'))).ref.get();
  }

  updateSubscription(subscription: any){
    return this.subscriptionRef.doc(String(localStorage.getItem('school_id'))).update(subscription);
  }

}
