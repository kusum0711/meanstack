import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/category';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public category: Category={ Categoryid:NaN,Categoryname:"",Categorydescription:"",_id:undefined};
  //public category!: Category;\Z
  editMode:boolean=false;
  constructor(private categoryService:CategoryService,private router:Router) { }
  ngOnInit(): void {
    this.category=this.categoryService.getter();
    
  }
  

/*  resetUserForm(f: NgForm) {
    f.resetForm();;
}*/ 


saveData(f:NgForm){
  
  if(this.category._id==undefined){
    
  this.categoryService.createCategory(this.category).subscribe({
    next:(data)=>{
      console.log(data);
      this.router.navigate(['/table']);
      
      //this.category.reset();
    },
    error:(error)=>{
      console.log(error);
    }
});
  }
  
  else{
    this.editMode=true;
      this.categoryService.updateCategory(this.category).subscribe({
        next:(data)=>{
          
          console.log(data);
          
          this.router.navigate(['/table'])
        },
        error:(error)=>{
          console.log(error);
        }
    });
  }
  
}

}
