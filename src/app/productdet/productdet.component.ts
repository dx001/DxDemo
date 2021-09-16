import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productdet',
  templateUrl: './productdet.component.html',
  styleUrls: ['./productdet.component.css']
})
export class ProductdetComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private ps:ProductService,private rtr:Router) { }

    prodid:any;
    prod:Product=new Product();
  ngOnInit(): void 
  {
    //Observable Method
    this.activeRoute.paramMap.subscribe(
      params=> {
          this.prodid=params.get("pid");

      }
    )
    console.log("get the data");
    this.prod=this.ps.getProdsById(this.prodid);
    console.log(this.prod);
    
  }
  cats=["Electronics","Fruits","Dress","Groceries"];
  saveProduct(prodForm:any)
  { 
    this.prod=prodForm.value;
    console.log(this.prod);
    this.ps.updateProduct(this.prod);
    this.rtr.navigate(['home']);
  }

  


}
