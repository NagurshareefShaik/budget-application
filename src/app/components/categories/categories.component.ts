import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDialogComponent } from 'src/app/dialogs/category-dialog/category-dialog.component';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  category:Category[]=[];
  ngOnInit(): void {
    this.category=[
      new Category(1,'Emi',"Expense"),
      new Category(2,'Salary',"Income"),
      new Category(3,'Loan',"Expense")
    ]
  }
  openDialog(){
    this.dialog.open(CategoryDialogComponent,{
      data: {
        category: ''
      }
    });
  }

  showDialog(categoryData:Category){
    this.dialog.open(CategoryDialogComponent,{
      data: {
        category: categoryData
      }
    });
  }
}
