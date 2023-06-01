import { Component } from '@angular/core';
import { SpaceiService } from '../spacei.service';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  users: any[] = [];
  newUser: any = {};
  selectedUser: any = {};
  showUserTable: boolean = true;
  jsonData: any[] = []; 
  showData: boolean = false;

  constructor(
    private dataservice: SpaceiService,
    private userService: CrudService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}
  
  ngOnInit() {
    this.loadUsers();
    this.dataservice.getData().subscribe(data => {
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
  toggleUserTable() {
    this.showUserTable = !this.showUserTable;
    // this.toastr.success('user deleted successfully', 'chandu', {
    //   progressBar: true,
    //   progressAnimation: 'increasing',
    // });
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
        this.toastr.success('user deleted successfully', 'chandu', {
          progressBar: true,
          progressAnimation: 'increasing',
        });

        this.loadUsers(); // Refresh the user list
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
