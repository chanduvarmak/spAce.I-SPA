import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent {
  loginForm!: FormGroup;
  users: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getData() {
    this.http.get('http://localhost:3000/Admin').subscribe(
      (response) => {
        this.users = response;
        // console.log(this.loginForm.value);
        this.logindata();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  logindata() {
    const loginEmail = this.loginForm.value.email;
    const loginPassword = this.loginForm.value.password;

    const userExists = this.users.some(
      (user: { email: any; password: any }) => {
        return user.email === loginEmail && user.password === loginPassword;
      }
    );

    if (userExists) {
      this.route.navigate(['/admindashboard']);
    } else {
      alert('you have no access for admin dashboard');
      this.loginForm.reset();
      // this.route.navigate(['/login']);
    }
  }

  // login() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //     this.http
  //       .post('http://localhost:3000/Admin', this.loginForm.value)
  //       .subscribe(
  //         (response) => {
  //           console.log('Login success:', response);
  //           this.loginForm.reset();
  //           this.route.navigate(['admindashboard']);
  //         },
  //         (error) => {
  //           console.error('Login error:', error);
  //         }
  //       );
  //   }
  // }

  // getData() {
  //   this.http.get('http://localhost:3000/Admin').subscribe(
  //     (response) => {
  //       this.users = response;
  //       // console.log(this.loginForm.value);
  //       alert('chandu');
  //       this.logindata();
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
  // logindata() {
  //   const loginEmail = this.loginForm.value.username;
  //   const loginPassword = this.loginForm.value.password;

  //   const userExists = this.users.some(
  //     (user: { email: any; password: any }) => {
  //       return user.email === loginEmail && user.password === loginPassword;
  //     }
  //   );

  //   if (userExists) {
  //     alert('User already exists. Please login.');
  //   } else {
  //     // Perform login process
  //   }
  // }
}
