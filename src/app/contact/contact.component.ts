import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
 
  formData = {
    companyName: '',
    companyEmail: '',
    city: '',
    interests: {
      research: false,
      commercial: false,
    },
  };
  

  cities = ['india', 'singapore', 'pakistan']; //we can add many cities as per our requests

  submitForm() {
    console.log(this.formData);
    // alert('successfully details submitted');

  }
}
