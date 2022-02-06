import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  personalUserSearchRef = this.afs.collection('personal');
  adminUserRef = this.afs.collection('restaurant/admin/user');
  userAccessRef = this.afs.collection('restaurant/admin/user-access');
  invitationRef = this.afs.collection('restaurant/admin/invitation');

  restaurantId = localStorage.getItem('restaurant_id') as string;
  adminUserId = sessionStorage.getItem('restaurant_admin_user_id') as string;
  invitationId = sessionStorage.getItem('restaurant_invitation_id') as string;

  // user search

  getSearchResult(searchQuery: string){
    return this.personalUserSearchRef.ref
      .orderBy('accounts')
      .startAt(searchQuery)
      .startAt(searchQuery + '\uf8ff')
      .get();
  }

  getSearchDetail(restaurantId: any){
    return this.personalUserSearchRef.doc(restaurantId).ref.get();
  }

  // user

  createAdminUser(adminUser: any){
    return this.adminUserRef.add(adminUser);
  }

  getAdminUser(){
    return this.adminUserRef.doc(this.adminUserId).ref.get();
  }

  updateAdminUser(adminUser: any){
    return this.adminUserRef.doc(this.adminUserId).update(adminUser);
  }

  deleteAdminUser(){
    return this.adminUserRef.doc(this.adminUserId).delete();
  }

  getAllAccountAdminUser(){
    return this.adminUserRef.ref
      .where("account", "==", this.restaurantId)
      .get();
  }

  // access

  createUserAccess(userAccess: any){
    return this.userAccessRef.add(userAccess);
  }

  getUserAccess(){
    return this.userAccessRef.doc(this.adminUserId).ref.get();
  }

  updateUserAccess(userAccess: any){
    return this.userAccessRef.doc(this.adminUserId).update(userAccess);
  }

  deleteUserAccess(){
    return this.userAccessRef.doc(this.adminUserId).delete();
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
      .where("account", "==", this.restaurantId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
