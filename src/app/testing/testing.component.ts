import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import { CollaborationserviceService } from '../collaborationservice.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent {
  collabcommContacts: any[] = [];
  contactusContacts: any[] = [];
  // selectedSection: string = 'Tasks';

  // toggleSection(section: string): void {
  //   this.selectedSection = section;
  // }
  
  // this one is for toggle edit option to create new user and update that user//
  // users: any[] = [];
  // newUser: any = {};
  // selectedUser: any = {};
  // isEditMode: boolean = false;
  // isCreateMode: boolean = false;
  // showDataTable: boolean = false;
  // toggleTable(): void {
  //   this.showDataTable = !this.showDataTable;
  // }
  // constructor(private userService: CrudService) {}
  // ngOnInit() {
  //   this.loadUsers();
  // }

  // loadUsers() {
  //   this.userService.getUsers().subscribe(
  //     (data) => {
  //       this.users = data;
  //     },
  //     (error) => {
  //       console.error('Error loading users:', error);
  //     }
  //   );
  // }

  // toggleCreateMode() {
  //   this.isCreateMode = !this.isCreateMode;
  //   this.newUser = {}; // Reset the form
  // }

  // createUser() {
  //   this.userService.createUser(this.newUser).subscribe(
  //     () => {
  //       console.log('User created successfully.');
  //       this.loadUsers();
  //       this.toggleCreateMode(); // Toggle back to list view
  //     },
  //     (error) => {
  //       console.error('Error creating user:', error);
  //     }
  //   );
  // }

  // toggleEditMode(user: any) {
  //   this.isEditMode = !this.isEditMode;
  //   this.selectedUser = this.isEditMode ? { ...user } : {}; // Create a copy of the selected user for editing or reset
  // }

  // updateUser() {
  //   this.userService.updateUser(this.selectedUser).subscribe(
  //     () => {
  //       console.log('User updated successfully.');
  //       this.loadUsers();
  //       this.toggleEditMode(this.selectedUser); // Toggle back to list view
  //     },
  //     (error) => {
  //       console.error('Error updating user:', error);
  //     }
  //   );
  // }

  // deleteUser(userId: string) {
  //   this.userService.deleteUser(userId).subscribe(
  //     () => {
  //       console.log('User deleted successfully.');
  //       this.loadUsers();
  //     },
  //     (error) => {
  //       console.error('Error deleting user:', error);
  //     }
  //   );
  // }


  // constructor(private router: Router,private contactservice: CollaborationserviceService) {}
  // loadCollabCommContacts() {
  //   this.contactservice.getCollabCommContacts()
  //     .subscribe(contacts => {
  //       this.collabcommContacts = contacts;
  //       console.log(this.collabcommContacts); 
  //     });
  // }
  // loadContactUsContacts() {
  //   this.contactservice.getContactUsContacts()
  //     .subscribe(contacts => {
  //       this.contactusContacts = contacts;
  //       console.log(this.contactusContacts);
  //     });
  // }
  // logout(): void {
  
  //   this.router.navigate(['/login']);
  // }
  // deleteData(){

  // }

  // Existing code
  users: any[] = [];
  newUser: any = {};
  selectedUser: any = {};
  showUserTable: boolean = false;
  jsonData: any[] = [];
  showData: boolean = false;
  subscriptions: any[] = [];
  showSubscriptions: boolean = false;
  activeMenu: string = '';

  constructor(
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
    this.loadData();
    this.loadSubscriptions();
  }

  toggleMenu(menu: string) {
    if (this.activeMenu === menu) {
      this.activeMenu = '';
    } else {
      this.activeMenu = menu;
    }
  }

  toggleUserTable() {
    this.showUserTable = !this.showUserTable;
  }

  toggleData() {
    this.showData = !this.showData;
  }

  toggleSubscriptions() {
    this.showSubscriptions = !this.showSubscriptions;
  }

  loadUsers() {
    this.http.get<any[]>('http://localhost:3000/signup')
      .subscribe(
        (data) => {
          this.users = data;
        },
        (error) => {
          console.error('Error loading users:', error);
        }
      );
  }

  loadData() {
    this.http.get<any[]>('http://localhost:3000/contactus')
      .subscribe(
        (data) => {
          this.jsonData = data;
        },
        (error) => {
          console.error('Error loading project data:', error);
        }
      );
  }

  loadSubscriptions() {
    this.http.get<any[]>('http://localhost:3000/homecontact')
      .subscribe(
        (data) => {
          this.subscriptions = data;
        },
        (error) => {
          console.error('Error loading subscriptions:', error);
        }
      );
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:3000/users/${userId}`)
        .subscribe(
          () => {
            this.loadUsers();
          },
          (error) => {
            console.error('Error deleting user:', error);
          }
        );
    }
  }

  deleteData(index: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.jsonData.splice(index, 1);
    }
  }

  logout() {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      this.route.navigate(['/adminlogin']);
    }
  }
}




