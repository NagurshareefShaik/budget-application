import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public category: any) { }
  categoryName:string=this.category.category.categoryName;
  categoryType:string=this.category.category.categoryType;
  categories:any=['Income','Expense'];
  ngOnInit(): void {
  }

}
