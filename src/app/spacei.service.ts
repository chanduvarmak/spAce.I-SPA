import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpaceiService {
  constructor(private http: HttpClient) {}
  getData() {
    const apiUrl = 'https://api.github.com/repos/chandukeertipati/spAce.I-SPA';
    return this.http.get(apiUrl);
  }
}
