import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  prod:Product=new Product();;

  constructor(private prodService:ProductService,private rtr:Router) { }

  ngOnInit(): void {
  }
  cats=["Electronics","Fruits","Dress","Groceries"];
  saveProduct(prodForm:any)
  { 
    this.prod=prodForm.value;
    this.prodService.addProduct(this.prod);
    this.rtr.navigate(['home']);
  }
/*
   */
 goHome()
 {
   this.rtr.navigate(['home']);
 } 

  
}
