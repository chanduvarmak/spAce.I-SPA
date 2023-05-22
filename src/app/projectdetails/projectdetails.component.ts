import { Component } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent {
  showDetails = false;
  projectName = 'My Project';
  projectDescription = 'This is a sample project';
  startDate = '2023-01-01';
  endDate = '2023-12-31';

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}

