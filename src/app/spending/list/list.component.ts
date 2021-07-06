import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnDestroy {

  private subscription: Subscription;

  constructor(private _service: BudgetService,
              private router: Router) {
        
    if(this._service.budget <= 0) this.router.navigate(['/badget']);
        
    this.subscription = this._service.getExpense()
      .subscribe(res => {
        console.log(res);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
