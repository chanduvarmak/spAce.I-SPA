import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// interface Technology {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  data:any=[]
  dataArray: any;
  constructor(private toaster: ToastrService, private http: HttpClient) {}
  showToastr() {
    this.toaster.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  deletePostedData(id: string): Observable<any> {
    const url = `http://localhost:3000/signup`; // Replace with your API endpoint

    return this.http.delete(url);
  }
  onDelete(id: string): void {
    this.deletePostedData(id).subscribe(
      () => {
        // Handle successful deletion
        console.log('Posted data deleted successfully.');
  
        // Optional: Remove the deleted data from your local array or refresh the data from the server
        this.removeDataFromLocalArray(id);
      },
      (error) => {
        // Handle error
        console.error('Error deleting posted data:', error);
      }
    );
  }
  removeDataFromLocalArray(id: string): void {
    // Find the index of the deleted data in your local array and remove it
    const index = this.dataArray.findIndex((data: { id: string; }) => data.id === id);
  
    if (index !== -1) {
      this.dataArray.splice(index, 1);
      console.log('Posted data removed from local array.');
    }
}
}