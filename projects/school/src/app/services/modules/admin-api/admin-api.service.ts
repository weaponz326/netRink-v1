import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  personalUserSearchRef = this.afs.collection('personal/users/personal_user');
  accountUserRef = this.afs.collection('school/module_admin/school_account_user');
  userAccessRef = this.afs.collection('school/module_admin/school_user_access');
  invitationRef = this.afs.collection('school/module_admin/school_invitation');

  // accountUser search

  getSearchResult(searchQuery: string){
    return this.personalUserSearchRef.ref
      .where("last_name", ">=", searchQuery)
      .where("last_name", "<", searchQuery + "z")
      .get();
  }

  getSearchDetail(personalId: any){
    return this.personalUserSearchRef.doc(personalId).ref.get();
  }

  // accountUser

  createAccountUser(userData: any){
    return this.accountUserRef.add(userData);
  }

  getAccountUser(){
    return this.accountUserRef.doc(String(sessionStorage.getItem('school_account_user_id'))).ref.get();
  }

  updateAccountUser(userData: any){
    return this.accountUserRef.doc(String(sessionStorage.getItem('school_account_user_id'))).update(userData);
  }

  deleteAccountUser(){
    return this.accountUserRef.doc(String(sessionStorage.getItem('school_account_user_id'))).delete();
  }

  getAccountAccountUser(ordering: any){
    return this.accountUserRef.ref
      .where("account.id", "==", String(localStorage.getItem('school_id')))
      .orderBy(ordering.field, ordering.direction)
      .get();
  }

  getUserAccountUser(){
    return this.accountUserRef.ref
      .where("user.id", "==", String(localStorage.getItem('personal_id')))
      .get();
  }

  // access

  createUserAccess(accountUserID: any, accessData: any){
    return this.userAccessRef.doc(accountUserID).set(accessData);
  }

  getUserAccess(){
    return this.userAccessRef.doc(String(sessionStorage.getItem('school_account_user_id'))).ref.get();
  }

  updateUserAccess(accessData: any){
    return this.userAccessRef.doc(String(sessionStorage.getItem('school_account_user_id'))).update(accessData);
  }

  deleteUserAccess(){
    return this.userAccessRef.doc(String(sessionStorage.getItem('school_account_user_id'))).delete();
  }

  // invitations

  createInvitation(invitationData: any){
    return this.invitationRef.add(invitationData);
  }

  getInvitation(invitationId: any){
    return this.invitationRef.doc(invitationId).ref.get();
  }

  updateInvitation(invitationId: any, invitationData: any){
    return this.invitationRef.doc(invitationId).update(invitationData);
  }

  deleteInvitation(invitationId: any){
    return this.invitationRef.doc(invitationId).delete();
  }

  getAccountInvitation(sorting: any, pageSize: any){
    return this.invitationRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountInvitationNext(sorting: any, pageSize: any, pageStart: any){
    return this.invitationRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountInvitationPrev(sorting: any, pageSize: any, pageStart: any){
    return this.invitationRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
