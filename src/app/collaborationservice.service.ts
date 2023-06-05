import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
interface ContactData {
  contactus: any[];
  collabcomm: any[];
}
@Injectable({
  providedIn: 'root',
})
export class CollaborationserviceService {
  private collabcommUrl = 'http://localhost:3000/collabcomm';
  private contactusUrl = 'http://localhost:3000/contactus';
  constructor(private http: HttpClient) {}
  getCollabCommContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.collabcommUrl);
  }
  getContactUsContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.contactusUrl);
  }
}
