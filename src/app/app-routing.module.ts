import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainModule } from 'process';
import { AddItemComponent } from './add-item/add-item.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [
  
  {path: '' , component: MainComponent,canActivate: [AuthGuard]},
  {path: 'cart' , component: CartComponent,canActivate: [AuthGuard]},
  {path: 'order' , component: OrderComponent,canActivate: [AuthGuard]},
  {path: 'addItem' , component: AddItemComponent,canActivate: [AuthGuard]},
  {path: 'checkout' , component: CheckoutComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

 
}
