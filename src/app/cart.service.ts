import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  public total=0;
  public noOfItems=0;
  constructor() { }
  addToCart(product: Product){
    console.log("Hello");
    console.log(product);
    
    if(this.cart.includes(product)){
      console.log("Hello");
      
      this.cart.forEach(item=>{
        if(item.name == product.name)
        item.quantity+=1;
      })
      
    }else
    {
      product.quantity+=1;
      this.cart.push(product);
    }
    

    localStorage.removeItem('Array');
    localStorage.setItem('Array',JSON.stringify(this.cart));
    console.log(this.cart)
    window.alert('Your product has been added to the cart!');
   
  }
  getCartTotal(){
    let total;
    this.cart.forEach((item)=>{
      
      console.log(item.price);
      return total;
    })
  }
  getCart() {
    return this.cart;
  }
  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
