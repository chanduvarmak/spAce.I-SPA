import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborationserviceService } from '../collaborationservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  tableVisible: boolean = false;
  collabcommContacts: any[] = [];
  contactusContacts: any[] = [];
  showProjects: boolean = true;
  showStatus: boolean = false;

  toggleTable() {
    this.tableVisible = !this.tableVisible;
  }
  toggleProjects() {
    this.showProjects = true;
    this.showStatus = false;
  }

  toggleStatus() {
    this.showProjects = false;
    this.showStatus = true;
  }
  constructor(
    private route: Router,
    private contactservice: CollaborationserviceService
  ) {}
  ngOnInit() {
    this.loadCollabCommContacts();
    this.loadContactUsContacts();
  }
 
  loadCollabCommContacts() {
    this.contactservice.getCollabCommContacts()
      .subscribe(contacts => {
        this.collabcommContacts = contacts;
        console.log(this.collabcommContacts); // Logging the fetched collabcomm contacts
      });
  }
  loadContactUsContacts() {
    this.contactservice.getContactUsContacts()
      .subscribe(contacts => {
        this.contactusContacts = contacts;
        console.log(this.contactusContacts); // Logging the fetched contactus contacts
      });
  }
  
  logout() {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // this.authService.logout();

      this.route.navigate(['/login']);
    }
  }

  lat = 0;
  lng = 0;
  zoom = 2;

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
