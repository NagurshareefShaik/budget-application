import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  income:number=1000
  expense:number=1000
  balance:number=1000
  accounts:Account[]=[]


  constructor() { }

  ngOnInit(): void {
    this.accounts=[new Account(1,'shareef'),new Account(2,'junnu')];
  }

  updateValues(value:string){
    alert(value)
  }
  

}
