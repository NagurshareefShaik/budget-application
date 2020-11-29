import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountDialogComponent } from './dialogs/account-dialog/account-dialog.component';
import { CategoryDialogComponent } from './dialogs/category-dialog/category-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    TransactionsComponent,
    AccountsComponent,
    CategoriesComponent,
    AccountDialogComponent,
    CategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AccountsComponent]
})
export class AppModule { }
