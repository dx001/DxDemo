
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myhttp:HttpClient)
   { }

    restUrl="https://jsonplaceholder.typicode.com/posts/1/comments";

    getFakeData()
    {
       return this.myhttp.get(this.restUrl);
    }

  prodArray=new Array<Product>();

 // srchArray=new Array<Product>();
  prods=[
      { id:1 , name:'A',desc:"Product A"},
      { id:2 , name:'B',desc:"Product B"},
      { id:3 , name:'C',desc:"Product C"},
      { id:4 , name:'D',desc:"Product D"},
      { id:5 , name:'E',desc:"Product E"},
      { id:6 , name:'F',desc:"Product F"},

  ]

  getAllProds()
  {
    return this.prods;
  }
  getProdsById(pid:string)
  {
    let p=new Product();
      for(let p1 of this.prodArray)
      {
        if(p1.prodid==pid)
        {
            p=p1;
            break;
        }
      }
      return p;
  }

  addProduct(product:Product)
  {
    this.prodArray.push(product);
    console.log(this.prodArray);
  }  
  getProducts()
  {
      return this.prodArray;
  }
  searchProduct(categ:string)
  {
    let srchArray=new Array<Product>();
    for(let p1 of this.prodArray)
    {
      if(p1.category==categ)
      {
        srchArray.push(p1);
      }
    }
    return srchArray;
  }
  deleteProduct(indx:number)
  {
    this.prodArray.splice(indx,1);
  }
  updateProduct(product:Product)
  {
      let i=0;
      for(i;i<this.prodArray.length;i++)
      {
        if(this.prodArray[i].prodid==product.prodid)
        {
            this.prodArray[i]=product;
            console.log("Updated");
        }
      }
  }
  validateLogin(uid:string,pass:string)
  {
    if(uid=="sa" && pass=="pass123")
      return true;
      else
      return false;
  }
}
