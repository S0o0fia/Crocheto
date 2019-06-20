import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms'
import { RouterModule }  from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoute} from './routes'
import { RegisterCutomerComponent } from './register-cutomer/register-cutomer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { OthersComponent } from './others/others.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import {PopupModule} from 'ng2-opd-popup';
import {MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterCutomerComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    WomenProductComponent,
    MenComponent,
    KidsComponent,
    OthersComponent,
    HomePageComponent,
    LoginCustomerComponent,
    CartComponent,
    ProfileComponent,
    OrdersComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule , 
    RouterModule.forRoot(appRoute) ,
    HttpClientModule ,
    ReactiveFormsModule , 
    MatPaginatorModule ,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent] ,
  entryComponents : [ProductDetailsComponent]
})
export class AppModule { }
