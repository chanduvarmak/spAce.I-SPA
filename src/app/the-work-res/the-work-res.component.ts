import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-the-work-res',
  templateUrl: './the-work-res.component.html',
  styleUrls: ['./the-work-res.component.css']
})
export class TheWorkResComponent {

  responseData: any;

  constructor(private http: HttpClient) {}

  callApi() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        this.responseData = data;
      });
  }
}
