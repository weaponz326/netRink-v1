import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class MenuApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  menuGroupRef = this.afs.collection('restaurant/module_menu/restaurant_menu_group');
  menuItemRef = this.afs.collection('restaurant/module_menu/restaurant_menu_item');

  // menu group

  createMenuGroup(menuGroup: any){
    return this.menuGroupRef.add(menuGroup);
  }

  getMenuGroup(){
    return this.menuGroupRef.doc(String(sessionStorage.getItem('restaurant_menu_group_id'))).ref.get();
  }

  updateMenuGroup(menuGroup: any){
    return this.menuGroupRef.doc(String(sessionStorage.getItem('restaurant_menu_group_id'))).update(menuGroup);
  }

  deleteMenuGroup(){
    return this.menuGroupRef.doc(String(sessionStorage.getItem('restaurant_menu_group_id'))).delete();
  }

  getAccountMenuGroup(sorting: any, pageSize: any){
    return this.menuGroupRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountMenuGroupNext(sorting: any, pageSize: any, pageStart: any){
    return this.menuGroupRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountMenuGroupPrev(sorting: any, pageSize: any, pageStart: any){
    return this.menuGroupRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountMenuGroup(){
    return this.menuGroupRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // menu item

  createMenuItem(menuItem: any){
    return this.menuItemRef.add(menuItem);
  }

  getMenuItem(){
    return this.menuItemRef.doc(String(sessionStorage.getItem('restaurant_menu_group_id'))).ref.get();
  }

  updateMenuItem(menuItem: any){
    return this.menuItemRef.doc(String(sessionStorage.getItem('restaurant_menu_group_id'))).update(menuItem);
  }

  deleteMenuItem(){
    return this.menuItemRef.doc(String(sessionStorage.getItem('restaurant_menu_group_id'))).delete();
  }

  getMenuGroupMenuItem(){
    return this.menuItemRef.ref
      .where("menu_group.id", "==", sessionStorage.getItem('restaurant_menu_group_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  getAccountMenuItem(sorting: any, pageSize: any){
    return this.menuItemRef.ref
      .where("menu_group.data.account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountMenuItemNext(sorting: any, pageSize: any, pageStart: any){
    return this.menuItemRef.ref
      .where("menu_group.data.account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountMenuItemPrev(sorting: any, pageSize: any, pageStart: any){
    return this.menuItemRef.ref
      .where("menu_group.data.account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountMenuItem(){
    return this.menuItemRef.ref
      .where("menu_group.data.account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

}
