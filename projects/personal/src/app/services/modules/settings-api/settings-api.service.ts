import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  extendedProfileRef = this.afs.collection('personal/module_settings/personal_extended_profile');
  invitationsRef = this.afs.collection('personal/module_settings/personal_invitation');

  // extended profile

  createExtendedProfile(personalId: any, extendedProfile: any){
    return this.extendedProfileRef.doc(personalId).set(extendedProfile);
  }

  getExtendedProfile(){
    return this.extendedProfileRef.doc(String(localStorage.getItem('personal_id'))).ref.get();
  }

  updateExtendedProfile(extendedProfile: any){
    return this.extendedProfileRef.doc(String(localStorage.getItem('personal_id'))).update(extendedProfile);
  }

  // invitations

  createInvitation(invitationData: any){
    return this.invitationsRef.add(invitationData);
  }

  getInvitation(invitationId: any){
    return this.invitationsRef.doc(invitationId).ref.get();
  }

  updateInvitation(invitationId: any, invitationData: any){
    return this.invitationsRef.doc(invitationId).update(invitationData);
  }

  deleteInvitation(invitationId: any){
    return this.invitationsRef.doc(invitationId).delete();
  }

  getUserInvitation(sorting: any, pageSize: any){
    return this.invitationsRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getUserInvitationNext(sorting: any, pageSize: any, pageStart: any){
    return this.invitationsRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserInvitationPrev(sorting: any, pageSize: any, pageStart: any){
    return this.invitationsRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
