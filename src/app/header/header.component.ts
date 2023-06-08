import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showCollaborationForm = false;
  isUserSignedUp: boolean = false;
  constructor(private http: HttpClient, private service: AuthserviceService) {}

  ngOnInit() {
    this.service.showForm$.subscribe(showForm => {
      this.showCollaborationForm = showForm;
    });
  }
   
}
