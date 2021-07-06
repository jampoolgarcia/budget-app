import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { BudgetService } from 'src/app/services/budget.service';
import { SpendingI } from '../model/spending';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [ ` 
    .bold{
      font-weight: 600;
    }
  `]
})
export class FormComponent {

  public expense!: SpendingI;

  constructor(private _service: BudgetService) {
    this.defaultData();
  }

  onSubmit(form: NgForm){
    if(this.expense.cash! <= this._service.leftover){
      this._service.addExpense({ 
        description: this.expense.description,
        cash: this.expense.cash
      });
      form.reset();
    }else{
      form.controls.cash.setErrors(
        {error: 'max'}
      )
    }
  }

  defaultData(){
    this.expense = {
      description: '',
      cash: null
    }
  }

}
