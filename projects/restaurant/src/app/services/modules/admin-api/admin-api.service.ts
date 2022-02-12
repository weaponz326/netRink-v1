import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  personalAccountUserSearchRef = this.afs.collection('personal');
  accountUserRef = this.afs.collection('restaurant/module_admin/admin_account_user');
  userAccessRef = this.afs.collection('restaurant/module_admin/admin_user_access');
  invitationRef = this.afs.collection('restaurant/module_admin/admin_invitation');

  invitationId = sessionStorage.getItem('restaurant_invitation_id') as string;

  // accountUser search

  getSearchResult(searchQuery: string){
    return this.personalAccountUserSearchRef.ref
      .orderBy('accounts')
      .startAt(searchQuery)
      .startAt(searchQuery + '\uf8ff')
      .get();
  }

  getSearchDetail(restaurantId: any){
    return this.personalAccountUserSearchRef.doc(restaurantId).ref.get();
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

  getAllAccountAccountUser(){
    return this.accountUserRef.ref
      .where("account", "==", String(localStorage.getItem('restaurant_id')))
      .get();
  }

  getAllUserAccountUser(){
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
    return this.invitationRef.doc(this.invitationId).ref.get();
  }

  getAllAccountInvitation(ordering: any, pageSize: any, pageStart: any){
    return this.invitationRef.ref
      .where("account", "==", String(localStorage.getItem('restaurant_id')))
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
