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
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


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
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AccountsComponent,CategoriesComponent]
})
export class AppModule { }
