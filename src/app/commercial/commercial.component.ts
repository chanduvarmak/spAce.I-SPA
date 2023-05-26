import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceiService } from '../spacei.service';
import { Observable } from 'rxjs';
import { CrudService } from '../crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
})
export class CommercialComponent {
  users: any[] = [];
  newUser: any = {};
  selectedUser: any = {};
  constructor(
    private userService: CrudService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.loadUsers();
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

  // jsonData: any;
  // specificData: any;
  // data: any = {};
  // users: any[] = [];
  // constructor(private http: HttpClient, private SpaceiServ: SpaceiService) {}
  // showData() {
  //   this.http.get('http://localhost:3000/signup').subscribe((data) => {
  //     this.jsonData = data;
  //   });
  // }
  // getDataFromApi() {
  //   this.SpaceiServ.getData().subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  // deleteData(id: number): Observable<any> {
  //   const url = `http://localhost:3000/signup`; // Replace with your API endpoint
  //   return this.http.delete(url);
  // }
  // onDelete(id: number): void {
  //   this.deleteData(id).subscribe(
  //     () => {
  //       console.log('Data deleted successfully.');
  //     },
  //     (error) => {
  //       console.error('Error deleting data:', error);
  //     }
  //   );
  //   const index = this.users.findIndex((user) => user.id === this.data);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //     this.deleteData(this.data).subscribe(
  //       () => {
  //         console.log('User deleted successfully.');
  //       },
  //       (error) => {
  //         console.error('Error deleting user:', error);
  //       }
  //     );
  //   }
  // }
  // fetchUserData() {}
  // onEdit(user: any) {
  //   console.log('Edit user:', user);
  // }
  // onDeleteUser(userId: number) {
  //   console.log('Delete user:', userId);
  // }
}
