import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  accountRef = this.afs.collection('personal/module_accounts/personal_account');
  transactionRef = this.afs.collection('personal/module_accounts/personal_account_transaction');

  // account

  createAccount(account: any){
    return this.accountRef.add(account);
  }

  getAccount(){
    return this.accountRef.doc(String(sessionStorage.getItem('personal_account_id'))).ref.get();
  }

  updateAccount(account: any){
    return this.accountRef.doc(String(sessionStorage.getItem('personal_account_id'))).update(account);
  }

  deleteAccount(){
    return this.accountRef.doc(String(sessionStorage.getItem('personal_account_id'))).delete();
  }

  getUserAccount(sorting: any, pageSize: any){
    return this.accountRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .limit(pageSize)
      .get();
  }

  getUserAccountNext(sorting: any, pageSize: any, pageStart: any){
    return this.accountRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserAccountPrev(sorting: any, pageSize: any, pageStart: any){
    return this.accountRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllUserAccount(){
    return this.accountRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy("created_at", "asc")
      .get();
  }

  // transactions

  createTransaction(transaction: any){
    return this.transactionRef.add(transaction);
  }

  updateTransaction(transactionId: any, transaction: any){
    return this.transactionRef.doc(transactionId).update(transaction);
  }

  deleteTransaction(transactionId: any){
    return this.transactionRef.doc(transactionId).delete();
  }

  getAccountTransaction(){
    return this.transactionRef.ref
      .where("account.id", "==", String(sessionStorage.getItem('personal_account_id')))
      // .orderBy("created_at", "asc")
      .get();
  }

  getUserTransaction(sorting: any, pageSize: any){
    return this.transactionRef.ref
      .where("account.data.user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .limit(pageSize)
      .get();
  }

  getUserTransactionNext(sorting: any, pageSize: any, pageStart: any){
    return this.transactionRef.ref
      .where("account.data.user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserTransactionPrev(sorting: any, pageSize: any, pageStart: any){
    return this.transactionRef.ref
      .where("account.data.user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllUserTransaction(){
    return this.transactionRef.ref
      .where("account.data.user", "==", localStorage.getItem('personal_id'))
      // .orderBy("created_at", "asc")
      .get();
  }

  // dashboard

  getWeekTransaction(startDate: any, endDate: any){
    return this.transactionRef.ref
      .where("account.data.user", "==", localStorage.getItem('personal_id'))
      // .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

}
