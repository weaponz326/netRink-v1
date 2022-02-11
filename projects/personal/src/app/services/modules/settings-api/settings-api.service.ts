import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  extendedProfileRef = this.afs.collection('personal/module_settings/settings_extended_profile');

  personalId = localStorage.getItem('personal_id') as string;

  // extended profile

  createExtendedProfile(personalId: any, extendedProfile: any){
    return this.extendedProfileRef.doc(personalId).set(extendedProfile);
  }

  getExtendedProfile(){
    return this.extendedProfileRef.doc(this.personalId).ref.get();
  }

  updateExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(this.personalId).update(extendedProfile);
  }

  // // get all suite accounts
  // public getUserAccounts(suiteUrl: any): Observable<any>{
  //   return this.http.get(suiteUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'));
  // }

}
