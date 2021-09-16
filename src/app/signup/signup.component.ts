import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  prodData:any;

  constructor(private pservice:ProductService,private rtr:Router) { }

  ngOnInit(): void 
  {
      this.prodData=this.pservice.getProducts();
  }
  deleteProd(i:number)
  {
      this.pservice.deleteProduct(i);
  }
  EditProd(p:string)
  {
    console.log(p);
    this.rtr.navigate(['prodet',p]);
  }
  /*
  <button (click)="goHome()" class="btn btn-primary">
  Home
 </button> */
goHome()
{
  this.rtr.navigate(['home']);
} 
}
