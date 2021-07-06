import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public budget: number = 0;
  public spending: number = 0;

  constructor() { }
}
