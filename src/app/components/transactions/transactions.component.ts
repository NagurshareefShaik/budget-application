import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  accounts:any=['shareef','junnu'];
  constructor() { }

  ngOnInit(): void {
  }
  updateValues(value:string){

  }
}
