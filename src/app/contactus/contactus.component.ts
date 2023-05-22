import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  researchForm!: FormGroup;
  // Replace with your desired technologies
  frontEndTechnologies: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular',
    'Vue.js',
  ];

  backEndTechnologies: string[] = [
    'Node.js',
    'Express',
    'Django',
    'Ruby on Rails',
    'ASP.NET',
    'Laravel',
  ];
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.researchForm = this.formBuilder.group({
      researchName: ['', Validators.required],
      researchDescription: ['', Validators.required],
      technology1: ['', Validators.required],
      technology2: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.researchForm.valid) {
      // Perform your submission logic here
      const formData = {
        researchName: this.researchForm.value.researchName,
        researchDescription: this.researchForm.value.researchDescription,
        frontEndTechnology:
          this.researchForm.value.frontEndTechnology === 'Frontend: All'
            ? 'All'
            : this.researchForm.value.frontEndTechnology,
        backEndTechnology:
          this.researchForm.value.backEndTechnology === 'Backend: All'
            ? 'All'
            : this.researchForm.value.backEndTechnology,
      };
      this.http.post('http://localhost:3000/profile', formData).subscribe(
        (response) => {
          // Handle the API server response here
          alert('form submitted successfully');
          console.log('Form data submitted successfully', response);
          console.log(this.researchForm.value);
          this.researchForm.reset();
          this.researchForm.markAsPristine();
          this.researchForm.markAsUntouched();
        },
        (error) => {
          // Handle the API server error here
          console.error('Error submitting form data', error);
        }
      );
    } else {
      // Show error messages and prevent form submission
      this.researchForm.markAllAsTouched();
    }
  }
}
