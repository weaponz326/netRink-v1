import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  accountRef = this.afs.collection('personal/module_accounts/accounts_account');
  incomeRef = this.afs.collection('personal/module_accounts/accounts_transaction');

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

  getAllUserAccount(sorting: any, pageSize: any, pageStart: any){
    return this.accountRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .limit(pageSize)
      .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
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
      .where("user", "==", String(sessionStorage.getItem('personal_account_id')))
      .get();
  }

  getAllUserTransaction(sorting: any, pageSize: any, pageStart: any){
    return this.accountRef.ref
      .where("account.user", "==", localStorage.getItem('personal_id'))
      .limit(pageSize)
      .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .get();
  }

}
