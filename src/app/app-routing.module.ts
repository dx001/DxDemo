import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetComponent } from './productdet/productdet.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'',component:LoginComponent}, //Default Routing
  {path:'login' ,component:LoginComponent}, // Path based routing
  {path:'home' ,component:HomeComponent},
  {path:'home/showall',component:SignupComponent},
  {path:'home/search',component:SearchComponent},
  //{path:'products',component:ProductComponent,
   // children:[
       // {path:'home/showall/productdet/:pid',component:ProductdetComponent}
    //]},
  //
  {path:'prodet/:pid',component:ProductdetComponent}, //Parameterized Routing
  {path:'products/demos',component:TaskComponent},
  {path:'home/newproduct',component:TaskComponent},
  {path:'**',component:ErrorComponent}  //Wildcard Routing ,Error Comp
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
