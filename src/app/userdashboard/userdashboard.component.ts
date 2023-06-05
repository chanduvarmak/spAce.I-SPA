import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent {
  constructor(private route: Router) {}
  logout() {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // Call your authentication service's logout method
      // this.authService.logout();

      // Redirect the user to the login page or any other desired page
      this.route.navigate(['/login']);
    }
  }
    
  
  lat = 0; // Set your default latitude
  lng = 0; // Set your default longitude
  zoom = 2; // Set your default zoom level

  clients = [
    { name: 'Client 1', country: 'Country 1', lat: 10, lng: 20 },
    { name: 'Client 2', country: 'Country 2', lat: 30, lng: 40 },
    { name: 'Client 3', country: 'Country 3', lat: 50, lng: 60 },
    // Add more clients with their respective latitudes and longitudes
  ];
  selectedSection: string = 'Tasks';

  toggleSection(section: string): void {
    this.selectedSection = section;
  }
}
