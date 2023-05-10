import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //this below steps are used to validate form fields,we use this variables in html to get error properties//
  regForm: FormGroup;
  constructor() {
    this.regForm = new FormGroup({
      uname: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  show() {
    console.log(this.regForm.value);
  }

  //THIS PIECE OF CODE IS USED TO STORE THE FEILDS DATA INSIDE LOCAL STORAGE//
  loginUsers: any[] = [];
  loginObj: any = {
    userName: '',
    password: '',
    email: '',
  };
  // loginObj: any={
  //   userName: '',
  //   password: '',
  //   email: '',
  // }
  ngOnInit(): void {}
  onLogin() {
    this.loginUsers.push(this.loginObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.loginUsers));
    this.loginObj = {
      userName: '',
      password: '',
      email: '',
    };
  }
}
