import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CheckoutService } from '../checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService:CartService,private checkoutService:CheckoutService, private router:Router) { }
noOfItems=0;
totalPrice=0;
name;
address;
email;
  ngOnInit(): void {
    this.noOfItems=this.cartService.noOfItems;
    this.totalPrice=this.cartService.total;
  }
  checkout(){
    console.log(this.name)
    this.checkoutService.checkout(this.name,this.email,this.address,this.noOfItems,this.totalPrice).subscribe((data)=>{
      if(data.status==201){
      window.alert("order placed")
      this.router.navigateByUrl('');
      }
    },(err)=>{
      console.log(err)
    });
  }

}
