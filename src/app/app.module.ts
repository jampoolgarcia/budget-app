import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { SpendingComponent } from './spending/spending.component';
import { FormComponent } from './spending/form/form.component';
import { ListComponent } from './spending/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    SpendingComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
