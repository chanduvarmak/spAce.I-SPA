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
}
