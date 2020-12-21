import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public accountData: Account) { }
  accountName:string=this.accountData.accountName;

  ngOnInit(): void {
  }

}
