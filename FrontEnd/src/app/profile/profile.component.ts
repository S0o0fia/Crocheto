import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/sharedUser/user.service';
import { User } from '../shared/sharedUser/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User; 
  constructor( private userservice : UserService , private route :Router) { }

  ngOnInit() {
     this.userservice.getCustomer().subscribe(
       data => {this.user = data;} , 
       err => {console.log(err);}

     );
    
    
    
}

gooreder() 
{
  this.route.navigate(['/orders']);
}

}
