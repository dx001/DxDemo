import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //posts:any;
 uid:any;
 pass:any;
 logError="";
  constructor(private ps:ProductService,private router:Router) 
  {
   
   }
  ngOnInit(): void 
  {
     /* this.ps.getFakeData().subscribe(
        (data)=>{
            console.log(data);
            this.posts=data;
        }
      ) */
  }
  validate()
  {
      if(this.ps.validateLogin(this.uid,this.pass))
      {
        localStorage.setItem("uid",this.uid);
        this.router.navigate(['home']);
      }
      else
      {
        this.logError="Invalid User!";
      }
  }
  
}
