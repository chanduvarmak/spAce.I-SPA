import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

// import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  //THIS PIECE OF CODE IS USED FOR VALIDATIONS AND CONFIRM PASSWORD MATCH//

  regForm: FormGroup;
  isUserSignedUp: boolean = false;
  users: any = [];
  emails: any = [];
  dataToStore: boolean = false;
  constructor(
    private http: HttpClient,
    private route: Router,
    private service: AuthserviceService 
  ) // private toastr: ToastrService,
  {
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

  //THIS BELOW CODE IS USED TO MATCH PASSWORDS//
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

  ngOnInit() {
    this.userData();
    this.http.get<any[]>('http://localhost:3000/signup').subscribe(
      (users: any[]) => {
        console.log(users);
        // Check if the user's data exists in the response
        const userData = users.find(
          (user) => user.email === this.regForm.value.email
        );

        if (userData) {
          this.isUserSignedUp = true;
        } else {
          this.isUserSignedUp = false;
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  userData() {
    this.http.get<any>('http://localhost:3000/signup').subscribe(
      (res) => {
        this.users = res;
        console.log(this.users);
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  checkEmail() {
    console.log('checkEmail called');
    for (let i = 0; i < this.users.length; i++) {
      this.emails.push(this.users[i].email);
    }
    const email = this.regForm.value.email;
    let emailExists = this.emails.includes(email);
    if (emailExists) {
      alert('email already exists');
      this.regForm.reset();
      this.route.navigate(['login']);
    } else {
      this.dataToStore = true;
    }
  }

  //THIS BELOW CODE IS USED TO POST DATA TO OUR JSON SERVER//
  signup() {
    console.log('hi this appears on form submit');
    this.checkEmail();
    // this.users.forEach((user: any) => {
    //   if (user.email == this.regForm.value.email) {
    //     alert('already exist');
    //     this.route.navigate(['login']);

    //     // return;
    //   } else {
    //     this.dataToStore = true;
    //   }
    // }
    // );

    // for (let i = 1; i < this.users.length; i++) {
    //   if (
    //     this.regForm.value.email.toLowerCase() ===
    //     this.users[i].email.toLowerCase()
    //   ) {
    //     alert('user already exists');
    //     this.route.navigate(['login']);
    //     // break;
    //   } else {
    //     this.dataToStore = true;
    //     break;
    //   }
    // }
    if (this.dataToStore) {
      this.http
        .post<any>('http://localhost:3000/signup', this.regForm.value)
        .subscribe(
          (res) => {
            alert('signup successfull');
            // this.toastr.success('Hello, World!', 'Success');
            this.regForm.reset();
            this.route.navigate(['login']);
            this.service.signin = true;
          },
          (err) => {
            alert('something went wrong');
          }
        );
    }
  }
}
