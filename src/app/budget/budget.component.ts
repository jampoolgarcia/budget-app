import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styles: [
  ]
})
export class BudgetComponent {

  public budget!: number;     
   
  constructor(private _service: BudgetService,
              private router: Router) { }

  ngSubmit(){
      this._service.budget = this.budget;
      this._service.spending = this.budget; 
      this.router.navigate(['/spending']);
  }

}
