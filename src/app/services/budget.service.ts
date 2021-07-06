import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SpendingI } from '../spending/model/spending';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public budget = 0;
  public leftover = 0;
  private $expense = new Subject<SpendingI>();

  constructor() { }

  addExpense(expense: SpendingI){
    this.leftover -= expense.cash!;
    this.$expense.next(expense);
  }

  getExpense(): Observable<SpendingI>{
    return this.$expense.asObservable();
  }
}
