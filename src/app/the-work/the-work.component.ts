import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-the-work',
  templateUrl: './the-work.component.html',
  styleUrls: ['./the-work.component.css'],
})
export class TheWorkComponent {
  // options: any[] = [];
  // constructor(private http: HttpClient) {}
  // ngOnInit() {
  //     this.http
  //       .get('https://jsonplaceholder.typicode.com/posts/1')
  //       .subscribe((data: any) => {
  //         this.options = data;
  //       });
  // }

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
