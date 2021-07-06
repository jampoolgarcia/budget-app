// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// routing
import { AppRoutingModule } from './app-routing.module';

// root
import { AppComponent } from './app.component';

// components
import { BudgetComponent } from './budget/budget.component';
import { SpendingComponent } from './spending/spending.component';
import { FormComponent } from './spending/form/form.component';
import { ListComponent } from './spending/list/list.component';

@NgModule({
  declarations: [
    // root
    AppComponent,

    // components
    BudgetComponent,
    SpendingComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    // core
    BrowserModule,
    FormsModule,

    // routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
