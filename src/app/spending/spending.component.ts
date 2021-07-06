import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styles: [
  ]
})
export class SpendingComponent implements OnDestroy {

  private subscription: Subscription;
  public leftover = 0;

  constructor(private _service: BudgetService) { 
    this.leftover = _service.leftover;
    this.subscription = this._service.getExpense()
      .subscribe(res => {
        this.leftover -= res.cash!;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
