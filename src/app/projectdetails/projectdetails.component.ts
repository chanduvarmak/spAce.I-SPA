import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpaceiService } from '../spacei.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
})
export class ProjectdetailsComponent {
  data: any;
  projects: any[] = [];
  constructor(
    private http: HttpClient,
    private projectdetails: SpaceiService
  ) {}
  ngOnInit(): void {}

  handleClick() {
    this.projectdetails.getData().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }

  //   this.projectdetails.getProjectData().subscribe(
  //     (data) => {
  //       // Handle the retrieved data here
  //       console.log(data);
  //     },
  //     (error) => {
  //       // Handle the error accordingly
  //       console.error(error);
  //     }
  //   );
  // }
}

// function handleClick() {
//   throw new Error('Function not implemented.');
// }
