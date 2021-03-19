import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  checkout(name,email,address,noOfItems,total){
    console.log(name);
    const body={name:name,customerEmail:email,customerAddress:address,quantity:noOfItems ,orderPrice:total}
    console.log(body);
    return this.http.post("http://172.31.35.224:9094/order-service/order/placeOrder",body,{observe:'response'});
  }
}
