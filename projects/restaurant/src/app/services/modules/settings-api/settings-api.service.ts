import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  extendedProfileRef = this.afs.collection('restaurant/module_settings/restaurant_extended_profile');
  subscriptionRef = this.afs.collection('restaurant/module_settings/restaurant_subscription');

  // extended profile

  createExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(String(localStorage.getItem('restaurant_id'))).set(extendedProfile);
  }

  getExtendedProfile(){
    return this.extendedProfileRef.doc(String(localStorage.getItem('restaurant_id'))).ref.get();
  }

  updateExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(String(localStorage.getItem('restaurant_id'))).update(extendedProfile);
  }

  // subscription

  createSubscription(subscription: any){
    return this.subscriptionRef.doc(String(localStorage.getItem('restaurant_id'))).set(subscription);
  }

  getSubscription(){
    console.log(localStorage.getItem('restaurant_id'));
    return this.subscriptionRef.doc(String(localStorage.getItem('restaurant_id'))).ref.get();
  }

  updateSubscription(subscription: any){
    return this.subscriptionRef.doc(String(localStorage.getItem('restaurant_id'))).update(subscription);
  }

}
