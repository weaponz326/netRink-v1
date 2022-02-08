import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  extendedProfileRef = this.afs.collection('restaurant/settings/extended-profile');
  subscriptionRef = this.afs.collection('restaurant/settings/subscription');

  restaurantId = localStorage.getItem('restaurant_id') as string;

  // extended profile

  createExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.add(extendedProfile);
  }

  getExtendedProfile(){
    return this.extendedProfileRef.doc(this.restaurantId).ref.get();
  }

  updateExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(this.restaurantId).update(extendedProfile);
  }

  // subscription

  createSubscription(subscription: any){
    return this.subscriptionRef.add(subscription);
  }

  getSubscription(){
    return this.subscriptionRef.doc(this.restaurantId).ref.get();
  }

  updateSubscription(subscription: any){
    return this.subscriptionRef.doc(this.restaurantId).update(subscription);
  }

}
