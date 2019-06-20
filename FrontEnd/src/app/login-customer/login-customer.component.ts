import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/sharedUser/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
  userForm: FormGroup;
  constructor(private router : Router,private form: FormBuilder, private userservice: UserService) { }

  ngOnInit() {
    this.userForm = this.form.group({
     
      Email: ['', [Validators.required , Validators.email] ],
      Password: ['', [Validators.required , Validators.minLength(6)]]
     
    });
  }
  onSubmit() {

    //
    if(this.userForm.valid){
      //alert(this.userservice.selecteduser.Email + this.userservice.selecteduser.Password);
       this.userservice.login(this.userservice.selecteduser).subscribe(
           (data)=>{
                window.location.reload();
                localStorage.setItem('token' , data.token); 
                localStorage.setItem('Email' , this.userservice.selecteduser.Email);
           } ,
         (err) => {alert(err)}

       );
       this.router.navigate(['./home']);
    }


}

DirectRegister ()
  {
    this.router.navigate(['/register']);
  }
}
