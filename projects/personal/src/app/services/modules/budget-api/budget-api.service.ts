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

  personalId = localStorage.getItem('personal_id') as string;
  budgetId = sessionStorage.getItem('personal_budget_id') as string;

  // budget

  createBudget(budget: any){
    return this.budgetRef.add(budget);
  }

  getBudget(){
    return this.budgetRef.doc(this.budgetId).ref.get();
  }

  updateBudget(budget: any){
    return this.budgetRef.doc(this.budgetId).update(budget);
  }

  deleteBudget(){
    return this.budgetRef.doc(this.budgetId).delete();
  }

  getAllUserBudget(ordering: any, pageSize: any, pageStart: any){
    return this.budgetRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
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

  getAllBudgetIncome(){
    return this.budgetRef.ref
      .where("budget", "==", this.budgetId)
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

  getAllBudgetExpenditure(){
    return this.budgetRef.ref
      .where("budget", "==", this.budgetId)
      .get();
  }

}
