import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product';
@Injectable() 

export class ProductService {

  constructor(private http:HttpClient) { }
  public getProduct()
  {
    console.log("test call");
    return this.http.get<Product[]>('http://172.31.35.224:9094/catalogue/product-service');
  }
  public getProductById(id)
  {
    console.log("test call id");
    return this.http.get<Product>('http://172.31.35.224:9094/catalogue/product-service/'+id);
  }
  
}
