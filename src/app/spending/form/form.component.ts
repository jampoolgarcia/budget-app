import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.defaultData();
  }

  onSubmit(){
    console.log('submit');
  }

  defaultData(){
    this.expense = {
      description: '',
      cash: null
    }
  }

}
