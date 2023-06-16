import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  users!: any[];

  newUser: any = {}; // Object to store new user data

  editingUserId: number = 0;
  constructor(private serverService: PracticeService) {}
  ngOnInit(): void {}

  getUsers() {
    this.serverService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  createUser() {
    this.serverService.createUser(this.newUser).subscribe(
      (response) => {
        this.getUsers(); // Refresh the user list after creating a new user
        this.newUser = {}; // Reset the new user object
        console.log(this.newUser);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editUser(userId: number) {
    this.editingUserId = userId;
  }

  cancelEdit() {
    this.editingUserId = 0;
  }

  updateUser(user: any) {
    this.serverService.updateUser(user.id, user).subscribe(
      (response) => {
        this.editingUserId = 0; // Exit edit mode
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteUser(userId: number) {
    this.serverService.deleteUser(userId).subscribe(
      (response) => {
        this.getUsers(); // Refresh the user list after deleting a user
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
