import { Component } from '@angular/core';

interface Technology {
  id: number;
  name: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  
  technologies: Technology[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' }
  ];

  selectedTechnology: number = 1;

  onSubmit() {
    const selectedTech = this.technologies.find(tech => tech.id === this.selectedTechnology);
    console.log('Selected Technology:', selectedTech);
    // Perform other operations or send the data to your server here
  }
}

