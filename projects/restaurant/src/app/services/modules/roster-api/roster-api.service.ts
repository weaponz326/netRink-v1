import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { environment } from 'projects/restaurant/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class RosterApiService {

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
  ) { }

  rosterRef = this.afs.collection('restaurant/module_roster/restaurant_roster');
  shiftRef = this.afs.collection('restaurant/module_roster/restaurant_roster_shift');
  batchRef = this.afs.collection('restaurant/module_roster/restaurant_roster_batch');
  personnelRef = this.afs.collection('restaurant/module_roster/restaurant_roster_personnel');
  sheetRef = this.afs.collection('restaurant/module_roster/restaurant_roster_sheet');

  // roster

  createRoster(roster: any){
    return this.rosterRef.add(roster);
  }

  getRoster(){
    return this.rosterRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).ref.get();
  }

  updateRoster(roster: any){
    return this.rosterRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).update(roster);
  }

  deleteRoster(){
    return this.rosterRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).delete();
  }

  getAccountRoster(sorting: any, pageSize: any){
    return this.rosterRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountRosterNext(sorting: any, pageSize: any, pageStart: any){
    return this.rosterRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountRosterPrev(sorting: any, pageSize: any, pageStart: any){
    return this.rosterRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountRoster(){
    return this.rosterRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // shifts

  createShift(shiftData: any){
    return this.shiftRef.add(shiftData);
  }

  getShift(shiftId: any){
    return this.shiftRef.doc(shiftId).ref.get();
  }

  updateShift(shiftId: any, shiftData: any){
    return this.shiftRef.doc(shiftId).update(shiftData);
  }

  deleteShift(shiftId: any){
    return this.shiftRef.doc(shiftId).delete();
  }

  getRosterShift(){
    return this.shiftRef.ref
      .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // batches

  createBatch(batchData: any){
    return this.batchRef.add(batchData);
  }

  getBatch(batchId: any){
    return this.batchRef.doc(batchId).ref.get();
  }

  updateBatch(batchId: any, batchData: any){
    return this.batchRef.doc(batchId).update(batchData);
  }

  deleteBatch(batchId: any){
    return this.batchRef.doc(batchId).delete();
  }

  getRosterBatch(){
    return this.batchRef.ref
      .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // shift personnel

  createPersonnel(personnelData: any){
    return this.personnelRef.add(personnelData);
  }

  getPersonnel(personnelId: any){
    return this.personnelRef.doc(personnelId).ref.get();
  }

  updatePersonnel(personnelId: any, personnelData: any){
    return this.personnelRef.doc(personnelId).update(personnelData);
  }

  deletePersonnel(personnelId: any){
    return this.personnelRef.doc(personnelId).delete();
  }

  getRosterPersonnel(){
    return this.personnelRef.ref
      .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // sheet

  createSheet(rosterId: any, sheetData: any){
    return this.sheetRef.doc(rosterId).set(sheetData);
  }

  getSheet(){
    return this.sheetRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).ref.get();
  }

  updateSheet(sheetData: any){
    return this.sheetRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).update(sheetData);
  }

  deleteSheet(){
    return this.sheetRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).delete();
  }

  getRosterSheet(){
    return this.sheetRef.ref
      .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

}
