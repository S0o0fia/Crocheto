import { Routes } from '@angular/router'
import { OthersComponent } from './others/others.component';
import { KidsComponent } from './kids/kids.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { MenComponent } from './men/men.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterCutomerComponent } from './register-cutomer/register-cutomer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';



export const appRoute: Routes = [
    {
       path :'home' , 
       component:HomePageComponent   
    }
    ,
    {
        path: 'others',
        component: OthersComponent,
    }
    ,
    {
        path: 'kids',
        component: KidsComponent

    }
    ,
    {
        path: 'women',
        component: WomenProductComponent
    }


    ,
    {
        path: 'men',
        component: MenComponent
    }
    ,
    {
        path:'register',
        component:RegisterCutomerComponent
    }
    ,
    {
        path : "cart/:quantity",
        component : CartComponent

    }
    ,
    {
        path : 'login' ,
        component : LoginCustomerComponent
    }
    ,
    {
        path : 'productdeatils/:type/:id',
        component : ProductDetailsComponent
    }
    ,
    {
        path :'profile' ,
        component : ProfileComponent
    }
    ,
    {
        path : 'orders' , 
        component : OrdersComponent
    }
    ,
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }

];