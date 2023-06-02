import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent {

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
  isAdmin: boolean = false;

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  isLoginMode = true;
  isAdminMode = false;
  loginData = { username: '', password: '' };
  adminData = { username: '', password: '' };

  toggleMode(mode: string) {
    if (mode === 'login') {
      this.isLoginMode = true;
      this.isAdminMode = false;
    } else if (mode === 'admin') {
      this.isLoginMode = false;
      this.isAdminMode = true;
    }
  }

  login() {
    if (this.isLoginMode) {
      // Perform login logic for regular users
      console.log('Login:', this.loginData);
    } else if (this.isAdminMode) {
      // Perform login logic for admin users
      console.log('Login as Admin:', this.adminData);
    }
  }
}

