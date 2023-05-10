import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupserviceService {
  constructor(public Http: HttpClient) {}
  show(data: any) {
    return this.Http.post<any>('http://localhost:3000/show/', data);
  }
}
