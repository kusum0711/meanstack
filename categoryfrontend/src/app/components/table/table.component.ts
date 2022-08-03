import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public categories!: Category[];
  constructor(private _categoryService:CategoryService,private router:Router) { }
  editMode:boolean=false;
  ngOnInit(): void {
    this.readCategories();
  }
readCategories(){
  this.editMode=true;
  this._categoryService.readCategories().subscribe({
    next:(data:any)=>{
      console.log(data);
      this.categories=data['msg'];
    },
    error:(error)=>{
      console.log(error);
    }
  });
}
edited(category: any){
  
  this._categoryService.setter(category);
  this.editMode=true;

  this.router.navigate(['/task']);
  this.editMode=true;
}
deleted(category: any){
  if(confirm("Are you sure you want to delete?"))
  this._categoryService.deleteCategory(category._id).subscribe({
    next:(data)=>{
      this.categories.splice(this.categories.indexOf(category),1);
    },
    error:(error)=>{

    }
});
}
}
