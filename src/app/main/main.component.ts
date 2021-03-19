import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../model/product';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
 
  constructor(private httpClientService:ProductService,private cartService:CartService) { }
  products:Product[];
  cart=[];
  product:Observable<Product>;
  p:Product;
  cartProducts:Product[];

  ngOnInit(): void {
    this.cart=JSON.parse(localStorage.getItem('Array'));
    localStorage.removeItem('Array');
    this.httpClientService.getProduct().subscribe(
      response =>{
        console.log(response)
        this.products=response
        console.log(this.products);
      }
    );
  }
addToCart( product : Product){
   

  this.cartService.addToCart(product);
}
}
