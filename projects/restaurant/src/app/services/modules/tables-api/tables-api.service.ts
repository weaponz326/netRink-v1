import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TablesApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  tableRef = this.afs.collection('restaurant/module_tables/restaurant_table');

  // tables

  createTable(tableData: any){
    return this.tableRef.add(tableData);
  }

  getTable(tableId: any){
    return this.tableRef.doc(tableId).ref.get();
  }

  updateTable(tableId: any, tableData: any){
    console.log(tableId);
    console.log(tableData);
    return this.tableRef.doc(tableId).update(tableData);
  }

  deleteTable(tableId: any){
    return this.tableRef.doc(tableId).delete();
  }

  getAccountTable(sorting: any, pageSize: any){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountTableNext(sorting: any, pageSize: any, pageStart: any){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountTablePrev(sorting: any, pageSize: any, pageStart: any){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountTable(){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      .orderBy("created_at" ,"desc")
      .get();
  }

}
