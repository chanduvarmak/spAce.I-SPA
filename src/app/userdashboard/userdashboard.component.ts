import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborationserviceService } from '../collaborationservice.service';
import * as $ from 'jquery';
// import { NgChartsModule } from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType, TooltipItem } from 'chart.js';
// import { Label, Colors } from 'ng2-charts';


interface Task {
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  showCollabDetails: boolean = true;
  showResearchDetails: boolean = false;
  showProgress: boolean = false;
  tableVisible: boolean = false;
  collabcommContacts: any[] = [];
  contactusContacts: any[] = [];
  menuItems: any[] = [];
  tasks: Task[] = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: true },
    { name: 'Task 3', completed: false }
  ];
  // public pieChartLabels: Label[] = ['Open', 'In Progress', 'Completed'];
  public pieChartData: number[] = [300, 500, 200]; // Example data, replace with your actual data
  public pieChartType: ChartType = 'pie';
  // public pieChartColors: Colors[] = [
  //   {
  //     backgroundColor: ['#ff6f69', '#ffcc5c', '#88d8b0']
  //   }
  // ];

  // User Behavior Graph data
  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Behavior' }
  ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  // public lineChartColors: Colors[] = [
  //   {
  //     borderColor: 'rgba(105, 0, 132, .8)',
  //     backgroundColor: 'rgba(105, 0, 132, .2)',
  //   }
  // ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  toggleCollabDetails() {
    this.showCollabDetails = !this.showCollabDetails;
  }

  toggleResearchDetails() {
    this.showResearchDetails = !this.showResearchDetails;
  }

  toggleTable() {
    this.tableVisible = !this.tableVisible;
  }
  toggleProgress(){
    this.showProgress=!this.showProgress;
  }
  constructor(
    private route: Router,
    private contactservice: CollaborationserviceService
  ) {}
  ngOnInit() {
    this.loadCollabCommContacts();
    this.loadContactUsContacts();
    // this.menuItems = Router.filter((menuItem: any) => menuItem);
    this.menuItems = this.menuItems.filter((menuItem: any) => menuItem);

  }
  isMobileMenu() {
    // if (typeof window !== 'undefined' && typeof $(window) !== 'undefined') {
    //   if ($(window).width() > 991) {
    //     return false;
    //   }
    // }
    // return true;
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

  // lat = 0;
  // lng = 0;
  // zoom = 2;

  // clients = [
  //   { name: 'Client 1', country: 'Country 1', lat: 10, lng: 20 },
  //   { name: 'Client 2', country: 'Country 2', lat: 30, lng: 40 },
  //   { name: 'Client 3', country: 'Country 3', lat: 50, lng: 60 },
  //   // Add more clients with their respective latitudes and longitudes
  // ];
  // selectedSection: string = 'Tasks';

  // toggleSection(section: string): void {
  //   this.selectedSection = section;
  // }
}
