import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://localhost:7232/WeatherForecast';
  private studentApiUrl = 'https://localhost:7232/api/Student';

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentApiUrl);
  }

  getStudentById(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.studentApiUrl}/${studentId}`);
  }

  addStudent(studentData: any): Observable<any> {
    return this.http.post(this.studentApiUrl, studentData);
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${this.studentApiUrl}/${studentId}`);
  }
}


