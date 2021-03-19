import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MainComponent } from './main/main.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CartComponent,
    OrderComponent,
    AddItemComponent,
    MainComponent,
    CheckoutComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-5obahj79.us.auth0.com',
      clientId: 'oyE5XcGFNCwNn0D9XsEVPhPNpnE2cQaJ'
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
