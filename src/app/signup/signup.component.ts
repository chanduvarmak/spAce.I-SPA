import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  constructor(public http:HttpClient) {
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

  show() {
    this.http
      .post('http://localhost:3000/Posts', this.regForm.value)
      .subscribe(
        (res) => {
          alert('Register Successfull');
          // this.registerForm.reset();
      })
  }
  //USING STATIC DATA MAKING SIGNUP FUNCTIONAL//

  // email: string = 'example@example.com';
  // username: string = 'example';
  // password: string = 'password';
  // confirmPassword: string = 'password';

  // signup(): void {
  //   if (this.password === this.confirmPassword) {
  //     // Save user data to database or perform other signup tasks
  //     alert('Signup successful!');
  //   } else {
  //     alert('Passwords do not match.');
  //   }
  // }
}
