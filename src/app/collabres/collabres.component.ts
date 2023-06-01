import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
interface Research {
  name: string;
  email: string;
  description: string;
  frontendTechnologies: string[];
  backendTechnologies: string[];
}

@Component({
  selector: 'app-collabres',
  templateUrl: './collabres.component.html',
  styleUrls: ['./collabres.component.css']
})
export class CollabresComponent {
  researchForm: FormGroup;
  frontendTechnologies: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'React',
    'Vue.js',
    'Bootstrap',
    'Tailwind CSS',
    // Add more frontend technologies here
  ];

  backendTechnologies: string[] = [
    'Node.js',
    'Express.js',
    'Django',
    'Ruby on Rails',
    'ASP.NET',
    'Spring Boot',
    'Laravel',
    'Flask',
    // Add more backend technologies here
  ];

  constructor(private http: HttpClient) {
    this.researchForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', Validators.required),
      frontendTechnologies: new FormArray([], Validators.required),
      backendTechnologies: new FormArray([], Validators.required),
    });
  }

  ngOnInit() {
    // Add additional form controls or perform other initialization tasks
  }

  get frontendTechnologiesFormArray() {
    return this.researchForm.get('frontendTechnologies') as FormArray;
  }

  get backendTechnologiesFormArray() {
    return this.researchForm.get('backendTechnologies') as FormArray;
  }

  addFrontendTechnology(event: any) {
    const selectedTechnology = event.target.value;
    this.frontendTechnologiesFormArray.push(
      new FormControl(selectedTechnology)
    );
  }

  removeFrontendTechnology(index: number) {
    this.frontendTechnologiesFormArray.removeAt(index);
  }

  addBackendTechnology(event: any) {
    const selectedTechnology = event.target.value;
    this.backendTechnologiesFormArray.push(new FormControl(selectedTechnology));
  }

  removeBackendTechnology(index: number) {
    this.backendTechnologiesFormArray.removeAt(index);
  }

  onSubmit() {
    // Access form data here and perform further actions
    if (this.researchForm.valid) {
      const researchData: Research = this.researchForm.value;

      this.http
        .post<Research>(' http://localhost:3000/contactus', researchData)
        .subscribe(
          (response) => {
            console.log('Data saved successfully!', response);
            // Perform any other desired actions upon success
          },
          (error) => {
            console.error('Error saving data:', error);
            // Handle error accordingly
          }
        );
      console.log(this.researchForm.value);
      this.researchForm.reset();
      this.researchForm.markAsPristine();
      this.researchForm.markAsUntouched();
    }
  }
}
