import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide=true;
  hideConfirm=true;
  
  selected!: string;
 

 
  constructor() { }

  ngOnInit(): void {
  }
  registerForm=new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    username : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]),
    confirmpassword : new FormControl('',[Validators.required]),
    role: new FormControl('',[Validators.required])
  })
  get username()
  {
  return this.registerForm.get('username');
  }
  get password()
  {
    
  return this.registerForm.get('password');
  }
  get firstName()
  {
    return this.registerForm.get('firstName');
  }
  get lastName()

  {
    return this.registerForm.get('lastName');
  }
  get confirmpassword()
  {
    return this.registerForm.get('confirmpassword');
  }
  get role()
  {
    return this.registerForm.get('role');
  }

  // clickevent(){
  //   console.log(this.selected);
  // }


}
