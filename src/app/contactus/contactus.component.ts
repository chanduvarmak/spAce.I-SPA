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
  constructor(private formBuilder: FormBuilder) {}

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
      console.log(this.researchForm.value);
      this.researchForm.reset();
      this.researchForm.markAsPristine();
      this.researchForm.markAsUntouched();
    } else {
      // Show error messages and prevent form submission
      this.researchForm.markAllAsTouched();
    }
  }
}
