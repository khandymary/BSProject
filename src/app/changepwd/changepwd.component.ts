import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
  hide = true;
  hidenew = true;

  constructor() { }

  ngOnInit(): void {
  }
  changePasswordForm = new FormGroup({
    currpwd: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required])
  })
  get currpwd() {
    return this.changePasswordForm.get('currpwd');
  }
  get newpassword() {
    return this.changePasswordForm.get('newpassword');
  }




}
