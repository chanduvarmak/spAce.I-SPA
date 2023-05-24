import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpaceiService } from '../spacei.service';

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   duration: string;
// }
// interface Research {
//   name: string;
//   email: string;
//   description: string;
//   frontendTechnologies: string[];
//   backendTechnologies: string[];
// }

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
})
export class ProjectdetailsComponent {
  constructor(
    private http: HttpClient,
    private projectdetails: SpaceiService
  ) {}
  ngOnInit() {}
    
  handleClick() {
    this.projectdetails.getProjectData().subscribe(
      (data) => {
        // Handle the retrieved data here
        console.log(data);
      },
      (error) => {
        // Handle the error accordingly
        console.error(error);
      }
    );
    }
  }


    



    function handleClick() {
      throw new Error('Function not implemented.');
    }
// function showdata() {
//   throw new Error('Function not implemented.');
// }
// function showdata() {
//   throw new Error('Function not implemented.');
// }
// selectedProject: Project | null = null;

// showProjectDetails(project: Project) {
//   this.selectedProject = project;
//   console.log(project);
// }
