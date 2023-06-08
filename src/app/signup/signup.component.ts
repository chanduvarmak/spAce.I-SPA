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
import { HeaderComponent } from '../header/header.component';

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
  showCollaborationForm = false;
  constructor(
    private http: HttpClient,
    private route: Router,
    private service: AuthserviceService
  ) {
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
    debugger;
    if (this.dataToStore) {
      this.http
        .post<any>('http://localhost:3000/signup', this.regForm.value)
        .subscribe(
          (res) => {
            alert('signup successfull');
            this.service.flag = true;

            // this.toastr.success('Hello, World!', 'Success');
            this.regForm.reset();
            this.route.navigate(['login']);
            debugger;

            // this.service.setCollaborationFormVisibility.next(true);
          },
          (err) => {
            alert('something went wrong');
          }
        );
    }
  }
}
