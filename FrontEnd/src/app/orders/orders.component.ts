import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/sharedOrders/order.service';
import { OrderdetailsService } from '../shared/sharedOrderDetails/orderdetails.service';
import { ProductService } from '../shared/sharedProduct/product.service';
import { Orders } from '../shared/sharedOrders/orders.model';
import { Orderdetails } from '../shared/sharedOrderDetails/orderdetails.model';
import { Product } from '../shared/sharedProduct/product.model';
import {MatPaginator , PageEvent} from '@angular/material/paginator';
import { AlertPromise } from 'selenium-webdriver';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    orders : Orders[]=[] ; 
    ordersDeatils : Orderdetails[]=[];
    product: Product;
    products : Product[]=[];
    totalprice: number = 0;
    length : number; 
    pageSize : number ;
    pageIndex  = 0; 
    event : PageEvent ;
    productlength : number;

  constructor(public dialog: MatDialog , private orderService : OrderService , private orderDetailService : OrderdetailsService , 
    private productservice : ProductService ) { }

  ngOnInit() {
 
    this.orderService.getOrders(localStorage.getItem("Email")).subscribe(
     data => {this.orders = data as Orders[];
      this.orders.forEach(element => {   
           
        
        this.orderDetailService.getOrders(element._id).subscribe(
         data1=>{
            
            this.ordersDeatils= data1;
        
          this.ordersDeatils.forEach(element => {
            
          
            this.productservice.GetSpecificProduct(element.ProductId).subscribe(
                   data2 =>{
                     this.products.push(data2);
                     this.totalprice += this.products.pop().Price * element.Quantity ;
                    
                     } ,
                   err => {console.log(err);}
            );
          });
          } ,
         err => console.log(err)   

        );
        
       
    
       });
     
      } , 
     err => {console.log(err);}
  );
    
  

  }


  
  onPageChange(event)
  {
 
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
   
    

  }
}
