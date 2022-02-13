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

  createTable(table: any){
    return this.tableRef.add(table);
  }

  getTable(){
    return this.tableRef.doc(String(sessionStorage.getItem('restaurant_table_id'))).ref.get();
  }

  updateTable(table: any){
    return this.tableRef.doc(String(sessionStorage.getItem('restaurant_table_id'))).update(table);
  }

  deleteTable(){
    return this.tableRef.doc(String(sessionStorage.getItem('restaurant_table_id'))).delete();
  }

  getAccountTable(sorting: any, pageSize: any){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountTableNext(sorting: any, pageSize: any, pageStart: any){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountTablePrev(sorting: any, pageSize: any, pageStart: any){
    return this.tableRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
