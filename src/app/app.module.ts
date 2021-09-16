import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component'; // Using AngualrForms for DataBInding
import { ReactiveFormsModule} from '@angular/forms'; // Model Driven / Reactive Forms.
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductdetComponent } from './productdet/productdet.component';
import { SearchComponent } from './search/search.component';
import { EditprodComponent } from './editprod/editprod.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TaskComponent,
    ProductComponent,
    HomeComponent,
    ErrorComponent,
    ProductdetComponent,
    SearchComponent,
    EditprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,// Imports FormsModule
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
