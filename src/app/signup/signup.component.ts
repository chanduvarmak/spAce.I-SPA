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
  //THIS PIECE OF CODE IS USED FOR VALIDATIONS AND CONFIRM PASSWORD MATCH//

  regForm: FormGroup;
  users: any = [];
  dataToStore: boolean = false;
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
    this.http.get<any>('http://localhost:3000/signupusers').subscribe(
      (res) => {
        this.users = res;
        console.log(this.users);
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  //THIS BELOW CODE IS USED TO POST DATA TO OUR JSON SERVER//
  signup() {
    this.users.forEach((obj: any) => {
      if (obj.email == this.regForm.value.email) {
        alert('already exist');
        return;
      } else {
        this.dataToStore = true;
      }
    });
    if (this.dataToStore) {
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
}

//new model to try//

//userData() {
//   this.http.get<any>('http://localhost:3000/signupusers').subscribe(
//     (res) => {
//       this.users = res;
//       console.log(this.users);

//       this.users.forEach((obj: any) => {
//         if (obj.email == this.regForm.value.email) {
//           alert('Email already exists');
//         } else {
//           this.dataToStore = true;
//         }
//       });

//       if (this.dataToStore) {
//         this.http
//           .post<any>('http://localhost:3000/signupusers', this.regForm.value)
//           .subscribe(
//             (res) => {
//               alert('Signup successful');
//               this.regForm.reset();
//               this.route.navigate(['login']);
//             },
//             (err) => {
//               alert('Something went wrong');
//             }
//           );
//       }
//     },
//     (err) => {
//       alert('Something went wrong');
//     }
//   );
// }
