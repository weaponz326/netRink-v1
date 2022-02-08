import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
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

  extendedProfileRef = this.afs.collection('personal/settings/extended-profile');

  personalId = localStorage.getItem('personal_id') as string;

  // extended profile

  createExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.add(extendedProfile);
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
