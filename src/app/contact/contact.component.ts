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

  cities = ['india', 'singapore', 'pakistan']; //we can add many cities as per our requests

  submitForm() {
    console.log(this.formData);
  }
}
