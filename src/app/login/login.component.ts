import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //this below steps are used to validate form fields,we use this variables in html to get error properties//
  regForm: FormGroup;
  constructor(private http: HttpClient, private route: Router) {
    this.regForm = new FormGroup({
      // uname: new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(4),
      // ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  //THIS BELLOW CODE IS USED TO GET THE POSTED DATA FROM OUR JSON DATA//
  login() {
    this.http.get<any>('http://localhost:3000/signupusers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.regForm.value.email &&
            a.password === this.regForm.value.password
          );
        });
        if (user) {
          alert('login success');
          this.regForm.reset();
          this.route.navigate(['commercial']);
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  //THIS PIECE OF CODE IS USED TO STORE THE FEILDS DATA INSIDE LOCAL STORAGE//
  // loginUsers: any[] = [];
  // loginObj: any = {
  //   userName: '',
  //   password: '',
  //   email: '',
  // };
  // loginObj: any={
  //   userName: '',
  //   password: '',
  //   email: '',
  // }
  // ngOnInit(): void {}
  // onLogin() {
  //   this.loginUsers.push(this.loginObj);
  //   localStorage.setItem('signupUsers', JSON.stringify(this.loginUsers));
  //   this.loginObj = {
  //     userName: '',
  //     password: '',
  //     email: '',
  //   };
  // }
}
