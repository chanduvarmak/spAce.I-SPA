import { Component } from '@angular/core';

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

  cities = ['india', 'singapore', 'pakistan']; // Replace with your city array

  submitForm() {
    console.log(this.formData);
  }
}
