import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { 

  }
 items: Product[]=[];
 totalprice=[];
 total=0;
 
 quantity = 0;

 
  ngOnInit(): void {
    localStorage.removeItem('Array');
    localStorage.setItem('Array',JSON.stringify(this.items));
    this.items=JSON.parse(localStorage.getItem('Array'));
    localStorage.removeItem('Array');
     var total=0;
    this.items = this.cartService.getCart();
    this.items.forEach((item)=>{
      this.totalprice.push(item.price);
      console.log(this.totalprice)
      this.total+=item.price*item.quantity
      this.total=Math.round(this.total);
      this.cartService.total=this.total;
      this.cartService.noOfItems=this.items.length;
    })

    }
  }

