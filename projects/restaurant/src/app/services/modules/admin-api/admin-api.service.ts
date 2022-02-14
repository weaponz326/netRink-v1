import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  personalUserSearchRef = this.afs.collection('personal/users/user');
  accountUserRef = this.afs.collection('restaurant/module_admin/restaurant_account_user');
  userAccessRef = this.afs.collection('restaurant/module_admin/restaurant_user_access');
  invitationRef = this.afs.collection('restaurant/module_admin/restaurant_invitation');

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
    return this.accountUserRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).ref.get();
  }

  updateAccountUser(userData: any){
    return this.accountUserRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).update(userData);
  }

  deleteAccountUser(){
    return this.accountUserRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).delete();
  }

  getAccountAccountUser(ordering: any){
    return this.accountUserRef.ref
      .where("account.id", "==", String(localStorage.getItem('restaurant_id')))
      // .orderBy(ordering.field, ordering.direction)
      .get();
  }

  getUserAccountUser(){
    return this.accountUserRef.ref
      .where("personal_id", "==", String(localStorage.getItem('personal_id')))
      .get();
  }

  // access

  createUserAccess(accountUserID: any, accessData: any){
    return this.userAccessRef.doc(accountUserID).set(accessData);
  }

  getUserAccess(){
    return this.userAccessRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).ref.get();
  }

  updateUserAccess(accessData: any){
    return this.userAccessRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).update(accessData);
  }

  deleteUserAccess(){
    return this.userAccessRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).delete();
  }

  // invitations

  createInvitation(invitation: any){
    return this.invitationRef.add(invitation);
  }

  getInvitation(){
    return this.invitationRef.doc(String(sessionStorage.getItem('restaurant_invitation_id'))).ref.get();
  }

  getAccountInvitation(sorting: any, pageSize: any){
    return this.invitationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountInvitationNext(sorting: any, pageSize: any, pageStart: any){
    return this.invitationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountInvitationPrev(sorting: any, pageSize: any, pageStart: any){
    return this.invitationRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
