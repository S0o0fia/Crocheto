import { Injectable } from '@angular/core';
import {User} from './user.model'
import { HttpClient , HttpHandler  , HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { pipe } from '@angular/core/src/render3';
import { Token } from '../../shared/sharedToken/token.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selecteduser : User ={
    FirstName : "" ,
    LastName : "",
    Username :"",
    Email :"",
    Password : "",
    Phone : "",
    Address : "" 
   };

 constructor( private client : HttpClient) { }
  
   postUser (user : User)
   {
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     return this.client.post(environment.apiBaseUrl+'/register', user , {headers});
    
   }

   login (user : User):Observable<Token>
   {
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     return this.client.post<Token>(environment.apiBaseUrl+'/login', user , {headers});

    
   }

   getCustomer ()
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams().set('Email' , localStorage.getItem('Email'));
    
     return  this.client.get<User>(environment.apiBaseUrl+'/customer' , {params,headers});
    
    } 

}
