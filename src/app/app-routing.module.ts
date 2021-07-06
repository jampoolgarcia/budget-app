//core modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// compoennts
import { BudgetComponent } from './budget/budget.component';
import { SpendingComponent } from './spending/spending.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/budget'
  },
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'spending',
    component: SpendingComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/budget'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
