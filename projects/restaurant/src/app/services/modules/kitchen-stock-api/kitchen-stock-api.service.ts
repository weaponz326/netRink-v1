import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class KitchenStockApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  stockItemRef = this.afs.collection('restaurant/module_kitchen_stock/restaurant_stock_item');

  // stock item

  createStockItem(itemData: any){
    return this.stockItemRef.add(itemData);
  }

  getStockItem(itemId: any){
    return this.stockItemRef.doc(itemId).ref.get();
  }

  updateStockItem(itemId: any, itemData: any){
    return this.stockItemRef.doc(itemId).update(itemData);
  }

  deleteStockItem(itemId: any){
    return this.stockItemRef.doc(itemId).delete();
  }

  getAccountStockItem(sorting: any, pageSize: any){
    return this.stockItemRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountStockItemNext(sorting: any, pageSize: any, pageStart: any){
    return this.stockItemRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountStockItemPrev(sorting: any, pageSize: any, pageStart: any){
    return this.stockItemRef.ref
      .where("account", "==", localStorage.getItem('restaurant_id'))
      // .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
