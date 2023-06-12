import { Component } from '@angular/core';
import { SpaceiService } from '../spacei.service';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  users: any[] = [];
  newUser: any = {};
  selectedUser: any = {};
  showUserTable: boolean = false;
  jsonData: any[] = [];
  showData: boolean = false;
  showSubscriptions: boolean = false;
  showPortfolios: boolean = false;
  subscriptions: any[] = [];
  activeMenu: string = '';
  contactDetails: any[] = [];
  collaborationDetails: any[] = [];
  showCollaborationDetails: boolean = false;
  showContactDetails:boolean=false;

  constructor(
    private dataservice: SpaceiService,
    private userService: CrudService,
    // private toastr: ToastrService,
    private http: HttpClient,
    private route: Router
  ) {}
  toggleMenu(menu: string) {
    if (this.activeMenu === menu) {
      this.activeMenu = '';
    } else {
      this.activeMenu = menu;
    }
  }
  ngOnInit() {
    this.loadUsers();
    this.loadSubscriptions();
    this.dataservice.getData().subscribe((data) => {
      this.jsonData = data;
    });
  }

  toggleData() {
    this.showData = !this.showData;
  }
  deleteData(index: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.jsonData.splice(index, 1);
    }
  }
  toggleSubscriptions() {
    this.showSubscriptions = !this.showSubscriptions;
  }
  
  togglePortfolios() {
    this.showPortfolios = !this.showPortfolios;
  }
  toggleUserTable() {
    this.showUserTable = !this.showUserTable;
    // this.toastr.success('user deleted successfully', 'chandu', {
    //   progressBar: true,
    //   progressAnimation: 'increasing',
    // });
  }
  loadSubscriptions() {
    this.http.get<any[]>('http://localhost:3000/homecontact').subscribe(
      (data) => {
        this.subscriptions = data;
      },
      (error) => {
        console.error('Error loading subscriptions:', error);
      }
    );
  }
  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      () => {
        console.log('User created successfully.');
        this.loadUsers(); // Refresh the user list
        this.newUser = {}; // Reset the form
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }
  // editUser(user: any) {
  //   this.selectedUser = { ...user };
  // }
  updateUser() {
    this.userService.updateUser(this.selectedUser).subscribe(
      () => {
        console.log('User updated successfully.');
        this.loadUsers();
        this.selectedUser = {};
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        // console.log('User deleted successfully.');
        // this.toastr.success('user deleted successfully', 'chandu', {
        //   progressBar: true,
        //   progressAnimation: 'increasing',
        // });

        this.loadUsers(); // Refresh the user list
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  logout() {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // this.authService.logout();

      this.route.navigate(['/adminlogin']);
    }
  }
  loadContactDetails() {
    this.http.get<any[]>('http://localhost:3000/contactus').subscribe(
      (data) => {
        this.contactDetails = data;
      },
      (error) => {
        console.error('Error loading contact details:', error);
      }
    );
  }
  loadCollaborationDetails() {
    this.http.get<any[]>('http://localhost:3000/collabcomm').subscribe(
      (data) => {
        this.collaborationDetails = data;
      },
      (error) => {
        console.error('Error loading collaboration details:', error);
      }
    );
  }
}
