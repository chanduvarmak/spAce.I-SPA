import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from '../toaster.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData: FormGroup;
  cities = ['india', 'america', 'russia', 'uk', 'pakistan'];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formData = this.formBuilder.group({
      companyName: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      interests: this.formBuilder.group({
        research: [false],
        commercial: [false],
      }),
    });
  }
  onSubmit() {
    console.log(this.formData);
    if (this.formData.invalid) {
      return;
    }

    const data = this.formData.value;

    this.http.post('http://localhost:3000/profile', data).subscribe(
      (response) => {
        
        console.log('Post request successful', response);
        this.formData.reset();
      },
      (error) => {
        console.log('Error occurred while making the post request', error);
      }
    );
  }
}

// formData = {
//   companyName: '',
//   companyEmail: '',
//   city: '',
//   interests: {
//     research: false,
//     commercial: false,
//   },
// };

// cities = ['india', 'singapore', 'pakistan']; //we can add many cities as per our requests

// submitForm() {
//   console.log(this.formData);
//   // alert('successfully details submitted');

// }
