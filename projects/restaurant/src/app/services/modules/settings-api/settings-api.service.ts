import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
    private endpoints: EndpointsService
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





  restaurantUrl = environment.restaurantUrl;
  personalUrl = environment.personalUrl;

  // public getAccount(): Observable<any>{
  //   return this.http.get(this.restaurantUrl + "accounts/account/" + localStorage.getItem('restaurant_id'));
  // }

  // public getExtendedProfile(): Observable<any>{
  //   return this.http.get(this.restaurantUrl + "module-settings/extended-profile/" + localStorage.getItem('restaurant_id'));
  // }

  // // send basic profile
  // public putAccount(account: any): Observable<any>{
  //   return this.http.put(this.restaurantUrl + "accounts/account/" + localStorage.getItem('restaurant_id'), account);
  // }

  // // send extended profile
  // public putExtendedProfile(extended: any): Observable<any>{
  //   return this.http.put(this.restaurantUrl + "module-settings/extended-profile/" + localStorage.getItem('restaurant_id'), extended);
  // }

  // // subscriptions

  // public getSubscription(): Observable<any>{
  //   return this.http.get(this.restaurantUrl + "module-settings/subscription/" + localStorage.getItem('restaurant_id'));
  // }

  // public putSubscription(subscription: any): Observable<any>{
  //   return this.http.put(this.restaurantUrl + "module-settings/subscription/" + localStorage.getItem('restaurant_id'), subscription);
  // }

  // history
  public getHistory(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-settings/history/" + localStorage.getItem('restaurant_id'));
  }

}
