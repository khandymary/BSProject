import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
 

  constructor(private router: Router) { }
 //,private userService: UserService
  ngOnInit(): void {
    
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  get username() {
    return this.loginForm.get('username');
  }
  get password() {

    return this.loginForm.get('password');
  }

  loginUser() {
    //localStorage.setItem('username','kmvk@gmail.com');
      //this.userService.login(this.username?.value,this.password?.value);

  }
  // onForgetPassword() {
  //  this.router.navigateByUrl('/changepwd');
  // }
  onSignUp() {
    this.router.navigateByUrl('/signup');
  }
  onChangePassword() {
    this.router.navigateByUrl('/changepwd');
  }
}
