import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
})
export class CommercialComponent {
  jsonData: any;

  constructor(private http: HttpClient) {}

  showData() {
    this.http.get('http://localhost:3000/signupusers').subscribe((data) => {
      this.jsonData = data;
    });
  }
}
