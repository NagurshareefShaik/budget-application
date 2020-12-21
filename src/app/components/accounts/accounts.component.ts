import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountDialogComponent } from 'src/app/dialogs/account-dialog/account-dialog.component';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  account:Account[]=[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.account =[
      new Account(1,'shareef'),
      new Account(2,'junnu'),
      new Account(3,'kunnu'),
      new Account(4,'sinnu'),
      new Account(5,'bunnu'),
      new Account(6,'talli'),
      new Account(7,'guddu'),

    ]
  }

  openDialog(){
    this.dialog.open(AccountDialogComponent,{
      data: {
        accountData: ''
      }
    });
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  showDialog(accountData:Account){
    this.dialog.open(AccountDialogComponent,{
      data: {
        accountName: accountData.accountName
      }
    });
  }
}
