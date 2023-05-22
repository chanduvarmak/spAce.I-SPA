import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceiService } from '../spacei.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
})
export class CommercialComponent {
  jsonData: any;
  specificData: any;
  constructor(private http: HttpClient, private SpaceiServ: SpaceiService) {}

  showData() {
    this.http.get('http://localhost:3000/signupusers').subscribe((data) => {
      this.jsonData = data;
    });
  }
  getDataFromApi() {
    this.SpaceiServ.getData().subscribe((data) => {
      console.log(data);
    });
    // this.SpaceiServ.getData().subscribe((data) => {
    //   this.specificData = data['X-RapidAPI-Key']; // Replace 'specificKey' with the desired key
    // });
  }

  // backgroundColor = 'red';

  // onMouseOver() {
  //   this.backgroundColor = 'blue';
  // }

  // onMouseOut() {
  //   this.backgroundColor = 'red';
  // }
}