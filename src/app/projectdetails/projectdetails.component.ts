import { Component } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
  duration: string;
}
@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
})
export class ProjectdetailsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet.',
      duration: '3 months',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Consectetur adipiscing elit.',
      duration: '6 months',
    },
    // Add more project objects as needed
  ];

  selectedProject: Project | null = null;

  showProjectDetails(project: Project) {
    this.selectedProject = project;
    console.log(project);
  }
}
