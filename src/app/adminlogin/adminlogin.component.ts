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

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.http
        .post('http://localhost:3000/Admin', this.loginForm.value)
        .subscribe(
          (response) => {
            console.log('Login success:', response);
            this.loginForm.reset();
            this.route.navigate(['admindashboard']);
          },
          (error) => {
            console.error('Login error:', error);
          }
        );
    }
  }
  //TO GET DATA
  // getData() {
  //   this.http.get('https://example.com/data').subscribe(
  //     (response) => {
  //       console.log('Data:', response);
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
}
