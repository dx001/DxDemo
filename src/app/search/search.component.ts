import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private ps:ProductService,private rtr:Router)
   { }
  cats=["Electronics","Fruits","Dress","Groceries"];
  prodArray:any;
  srch:any;
  ngOnInit(): void 
  {
  }
  srchProduct()
  {
      this.prodArray=this.ps.searchProduct(this.srch);
  }
  goHome()
 {
   this.rtr.navigate(['home']);
 } 

 deleteProd(i:number)
  {
      this.ps.deleteProduct(i);
  }
  EditProd(p:string)
  {
    console.log(p);
    this.rtr.navigate(['prodet',p]);
  }
}
