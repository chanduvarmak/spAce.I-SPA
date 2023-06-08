import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private showFormSubject = new BehaviorSubject<boolean>(false);
  showForm$ = this.showFormSubject.asObservable();

  setCollaborationFormVisibility(showForm: boolean) {
    this.showFormSubject.next(showForm);
  }
}
