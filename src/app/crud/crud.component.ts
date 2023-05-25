import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface Technology {
  id: number;
  name: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  constructor(private toaster: ToastrService) {}
  showToastr() {
    this.toaster.success('this is good', 'chandu');
  }
}
