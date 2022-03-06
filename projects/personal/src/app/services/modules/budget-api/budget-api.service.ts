import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class BudgetApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  budgetRef = this.afs.collection('personal/module_budget/personal_budget');
  incomeRef = this.afs.collection('personal/module_budget/personal_budget_income');
  expenditureRef = this.afs.collection('personal/module_budget/personal_budget_expenditure');

  // budget

  createBudget(budget: any){
    return this.budgetRef.add(budget);
  }

  getBudget(){
    return this.budgetRef.doc(String(sessionStorage.getItem('personal_budget_id'))).ref.get();
  }

  updateBudget(budget: any){
    return this.budgetRef.doc(String(sessionStorage.getItem('personal_budget_id'))).update(budget);
  }

  deleteBudget(){
    return this.budgetRef.doc(String(sessionStorage.getItem('personal_budget_id'))).delete();
  }

  getUserBudget(sorting: any, pageSize: any){
    return this.budgetRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting.field, sorting.direction)
      .limit(pageSize)
      .get();
  }

  getUserBudgetNext(sorting: any, pageSize: any, pageStart: any){
    return this.budgetRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserBudgetPrev(sorting: any, pageSize: any, pageStart: any){
    return this.budgetRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllUserBudget(){
    return this.budgetRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy("created_at", "desc")
      .get();
  }

  // income

  createIncome(budget: any){
    return this.incomeRef.add(budget);
  }

  updateIncome(incomeId: any, income: any){
    return this.incomeRef.doc(incomeId).update(income);
  }

  deleteIncome(incomeId: any){
    return this.incomeRef.doc(incomeId).delete();
  }

  getBudgetIncome(){
    return this.incomeRef.ref
      .where("budget.id", "==", String(sessionStorage.getItem('personal_budget_id')))
      .orderBy("created_at", "asc")
      .get();
  }

  // expenditure

  createExpenditure(budget: any){
    return this.expenditureRef.add(budget);
  }

  updateExpenditure(expenditureId: any, expenditure: any){
    return this.expenditureRef.doc(expenditureId).update(expenditure);
  }

  deleteExpenditure(expenditureId: any){
    return this.expenditureRef.doc(expenditureId).delete();
  }

  getBudgetExpenditure(){
    return this.expenditureRef.ref
      .where("budget.id", "==", String(sessionStorage.getItem('personal_budget_id')))
      .orderBy("created_at", "asc")
      .get();
  }

  // dashboard

  getMonthBudget(startDate: any, endDate: any){
    return this.budgetRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

  getWeekIncome(startDate: any, endDate: any){
    return this.incomeRef.ref
      .where("budget.data.user", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

  getWeekExpenditure(startDate: any, endDate: any){
    return this.expenditureRef.ref
      .where("budget.data.user", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

}
