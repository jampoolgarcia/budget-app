import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';
import { SpendingI } from '../model/spending';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnDestroy {

  public expensesList: SpendingI[] = [];
  private subscription: Subscription;
  public budget = 0;
  public leftover = 0;

  constructor(private _service: BudgetService,
              private router: Router) {
        
    if(this._service.budget <= 0) this.router.navigate(['/badget']);
    this.budget = this._service.budget;
    this.leftover = this._service.leftover;
    this.subscription = this._service.getExpense()
      .subscribe(res => {
        this.leftover -= res.cash!;
        this.expensesList.push(res);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getClass(){
    if(this._service.budget / 4 >= this._service.leftover) 
      return 'alert alert-danger';
    if(this._service.budget / 2 >= this._service.leftover)
      return 'alert alert-warning';
    
    return 'alert alert-secondary';
  }

}
