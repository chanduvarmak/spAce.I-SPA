import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  private baseUrl1 = 'http://localhost:3000'; // Adjust the base URL

  constructor(private http: HttpClient) { }

  postFormData(data: any): Observable<any> {
    const url = `${this.baseUrl1}/python`; // Replace 'endpoint' with the actual endpoint
    return this.http.post(url, data);
  }
}
