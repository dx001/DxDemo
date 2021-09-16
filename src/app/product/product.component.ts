import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private pservice:ProductService) { }

  prodsData:any;

  ngOnInit(): void 
  {
      this.prodsData=this.pservice.getAllProds();
  }
  //Employee Management
  // Register Employee -> TDF
  // Login -> Update Profile  -> MDF
  prodForm=new FormGroup(
    {
      prodid:new FormControl('',Validators.required),
      prodname:new FormControl('',[Validators.required ,Validators.minLength(3)]),
      price:new FormControl('',Validators.required),
      supemail:new FormControl('',Validators.email)
    }
  )
  saveData()
  {
    console.log(this.prodForm.value);
  }
}
