import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class BudgetApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  budgetRef = this.afs.collection('personal/module_budget/budget_budget');
  incomeRef = this.afs.collection('personal/module_budget/budget_income');
  expenditureRef = this.afs.collection('personal/budget/expenditure');

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

  getAllUserBudget(sorting: any, pageSize: any, pageStart: any){
    return this.budgetRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .limit(pageSize)
      .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .get();
  }

  // income

  createIncome(budget: any){
    return this.budgetRef.add(budget);
  }

  updateIncome(incomeId: any, income: any){
    return this.budgetRef.doc(incomeId).update(income);
  }

  deleteIncome(incomeId: any){
    return this.budgetRef.doc(incomeId).delete();
  }

  getAllBudgetIncome(sorting: any){
    return this.budgetRef.ref
      .where("budget", "==", String(sessionStorage.getItem('personal_budget_id')))
      .orderBy(sorting.field, sorting.direction)
      .get();
  }

  // expenditure

  createExpenditure(budget: any){
    return this.budgetRef.add(budget);
  }

  updateExpenditure(expenditureId: any, expenditure: any){
    return this.budgetRef.doc(expenditureId).update(expenditure);
  }

  deleteExpenditure(expenditureId: any){
    return this.budgetRef.doc(expenditureId).delete();
  }

  getAllBudgetExpenditure(sorting: any){
    return this.budgetRef.ref
      .where("budget", "==", String(sessionStorage.getItem('personal_budget_id')))
      .orderBy(sorting.field, sorting.direction)
      .get();
  }

}
