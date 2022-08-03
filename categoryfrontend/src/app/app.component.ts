import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'categoryfrontend';
  public category!: Category;
  constructor(private categoryService:CategoryService,private router:Router) { }
  newCategory(event:any){
    event.preventDefault();
    this.categoryService.setter(new Category());
    this.router.navigate(['/task']);
  
    //this.category.reset();
    //this.event.reset();
    
    }
    
}
