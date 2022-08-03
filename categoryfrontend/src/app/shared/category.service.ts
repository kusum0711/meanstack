import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category!: Category;
private baseUri:string="http://localhost:8081";
private headers =new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  editMode:boolean=true;
  
  createCategory(category:Category){
    return this.http.post(this.baseUri+'/create',category,{headers:this.headers});
  }

  readCategories(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateCategory(category:Category){
    return this.http.put(this.baseUri+'/update',category,{headers:this.headers});
 
  }

  deleteCategory(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
setter(category:Category){
  this.category=category;
  this.editMode=true;
  
}
getter(){
  if(this.category){
    return this.category;
    }
    return { Categoryid:NaN,Categoryname:"",Categorydescription:"",_id:undefined }
 // return this.category;
}
}
