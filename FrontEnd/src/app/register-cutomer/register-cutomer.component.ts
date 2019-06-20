import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/sharedUser/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-cutomer',
  templateUrl: './register-cutomer.component.html',
  styleUrls: ['./register-cutomer.component.css']
})
export class RegisterCutomerComponent implements OnInit {

  userForm: FormGroup;
  constructor(private form: FormBuilder, private userservice: UserService) { }

  ngOnInit() {
    this.userForm = this.form.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required , Validators.email] ],
      Password: ['', [Validators.required , Validators.minLength(6)]],
      Username: ['', [Validators.required ]],
      Phone: ['', [Validators.required , Validators.maxLength(11) , Validators.maxLength(11) ]],
      Address: ['', [Validators.required]]
    });
  }


  onSubmit() {

    //
    if(this.userForm.valid){
      
      this.userservice.postUser(this.userservice.selecteduser).subscribe();
    
  }
  }
}
