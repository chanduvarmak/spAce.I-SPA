import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isUserSignedUp: boolean = false;
  constructor(private http: HttpClient, private service: AuthserviceService) {}

  ngOnInit() {
    this.isUserSignedUp = this.service.signin;
    this.http.get<any[]>('http://localhost:3000/signup').subscribe(
      (users: any[]) => {
        console.log(users);

        const userData = users.find((user) => user.id === '1');

        if (userData) {
          this.isUserSignedUp = true;
        } else {
          this.isUserSignedUp = false;
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
