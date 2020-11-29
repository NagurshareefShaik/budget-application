import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'accounts',component:AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
