import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  //THIS PIECE OF CODE IS USED TO STORE THE FEILDS DATA INSIDE LOCAL STORAGE//
  // signupUsers: any[] = [];
  // signupObj: any = {
  //   email: '',
  //   userName: '',
  //   password: '',
  //   cpassword: '',
  // };
  // ngOnInit(): void {}
  // onSignup() {
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  //   this.signupObj = {
  //     email: '',
  //     userName: '',
  //     password: '',
  //     cpassword: '',
  //   };
  // }

  //THIS PIECE OF CODE IS USED FOR VALIDATIONS AND CONFIRM PASSWORD MATCH//
  regForm: FormGroup;
  constructor(private http: HttpClient, private route: Router) {
    this.regForm = new FormGroup(
      {
        uname: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(),
        cpassword: new FormControl(null, [Validators.required]),
      },
      this.passwordMatch
    );
  }
  passwordMatch(rf: any) {
    let password = rf.controls['password'].value;
    let cpassword = rf.controls['cpassword'].value;

    if (password === cpassword) {
      return null;
    } else {
      return {
        passwordsMatch: true,
      };
    }
  }

  signup() {
    this.http
      .post<any>('http://localhost:3000/signupusers', this.regForm.value)
      .subscribe(
        (res) => {
          alert('signup successfull');
          this.regForm.reset();
          this.route.navigate(['login']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
}
