import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceiService } from '../spacei.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
})
export class CommercialComponent {
  jsonData: any;
  specificData: any;
  data: any = {};
  users: any[] = [];

  constructor(private http: HttpClient, private SpaceiServ: SpaceiService) {}

  showData() {
    this.http.get('http://localhost:3000/signup').subscribe((data) => {
      this.jsonData = data;
    });
  }
  getDataFromApi() {
    this.SpaceiServ.getData().subscribe((data) => {
      console.log(data);
    });
  }
  deleteData(id: number): Observable<any> {
    const url = `http://localhost:3000/signup`;

    return this.http.delete(url);
  }
  onDelete(id: number): void {
    this.deleteData(id).subscribe(
      () => {
        console.log('Data deleted successfully.');
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
    const index = this.users.findIndex((user) => user.id === this.data);

    if (index !== -1) {
      this.users.splice(index, 1);

      this.deleteData(this.data).subscribe(
        () => {
          console.log('User deleted successfully.');
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  fetchUserData() {}
  onEdit(user: any) {
    console.log('Edit user:', user);
  }
  onDeleteUser(userId: number) {
    console.log('Delete user:', userId);
  }
}
