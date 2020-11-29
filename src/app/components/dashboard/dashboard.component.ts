import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  income:number=0
  expense:number=0
  accounts:any=['shareef','junnu'];


  constructor() { }

  ngOnInit(): void {
  }

  updateValues(value:string){

  }
  

}
