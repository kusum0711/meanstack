import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryService } from './shared/category.service';
import { FormsModule } from '@angular/forms';

 
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TableComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
