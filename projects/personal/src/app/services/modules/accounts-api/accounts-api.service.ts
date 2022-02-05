import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  accountRef = this.afs.collection('personal/accounts/account');
  incomeRef = this.afs.collection('personal/accounts/transaction');

  personalId = localStorage.getItem('personal_id') as string;
  accountId = sessionStorage.getItem('personal_account_id') as string;

  // account

  createAccount(account: any){
    return this.accountRef.add(account);
  }

  getAccount(){
    return this.accountRef.doc(this.accountId).ref.get();
  }

  updateAccount(account: any){
    return this.accountRef.doc(this.accountId).update(account);
  }

  deleteAccount(){
    return this.accountRef.doc(this.accountId).delete();
  }

  getAllUserAccount(ordering: any, pageSize: any, pageStart: any){
    return this.accountRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  // transactions

  createTransaction(transaction: any){
    return this.accountRef.add(transaction);
  }

  updateTransaction(transactionId: any, transaction: any){
    return this.accountRef.doc(transactionId).update(transaction);
  }

  deleteTransaction(transactionId: any){
    return this.accountRef.doc(transactionId).delete();
  }

  getAllAccountTransaction(){
    return this.accountRef.ref
      .where("user", "==", this.accountId)
      .get();
  }

  getAllUserTransaction(ordering: any, pageSize: any, pageStart: any){
    return this.accountRef.ref
      .where("account.user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
