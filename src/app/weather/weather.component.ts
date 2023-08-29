import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  isDataLoaded: boolean = false;
  students: any[] = [];
  constructor(private weatherService: WeatherService,private http:HttpClient) { }

  ngOnInit(): void {
    this.loadStudents();

  }

  fetchData(): void {
    this.weatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
      this.isDataLoaded = true;
    });
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = {
        studentName: form.value.studentName,
        emailId: form.value.emailId
      };

      this.http.post('https://localhost:7232/api/Student', formData)
        .subscribe(
          () => {
            alert('Student data saved successfully');
            form.reset();
          },
          (error) => {
            console.error('Error saving student data:', error);
          }
        );
    }
  }
  loadStudents(): void {
    this.weatherService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }
  getStudent(studentId: number): void {
    this.weatherService.getStudentById(studentId).subscribe(
      (data) => {
        console.log('Student data:', data);
      },
      (error) => {
        console.error('Error getting student:', error);
      }
    );
  }

  deleteStudent(studentId: number): void {
    this.weatherService.deleteStudent(studentId).subscribe(
      () => {
        console.log('Student deleted successfully');
        this.loadStudents();
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }
} 


