import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpaceiService } from '../spacei.service';
import { Observable } from 'rxjs';

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
 
}
