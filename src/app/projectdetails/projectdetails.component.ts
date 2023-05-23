import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
  duration: string;
}
interface Research {
  name: string;
  email: string;
  description: string;
  frontendTechnologies: string[];
  backendTechnologies: string[];
}

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
})
export class ProjectdetailsComponent {
  researches: Research[] = [];
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
  constructor(private http: HttpClient) {}
  ngOnInit() {
  //   this.http.get<Research[]>('http://localhost:3000/posts').subscribe(
  //     (data) => {
  //       this.researches = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //       // Handle error accordingly
  //     }
  //   );
  }
  selectedProject: Project | null = null;

  showProjectDetails(project: Project) {
    this.selectedProject = project;
    console.log(project);
  }
}
