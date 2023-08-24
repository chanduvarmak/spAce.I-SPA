import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent  {


  // csvContent: string = '';
  // fileName: string = '';
  // fileSize: number = 0;
  // submitted: boolean = false;

  // handleFileInput(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
  //   const files = inputElement.files;

  //   if (files && files.length > 0) {
  //     const file = files.item(0);
  //     if (file) {
  //       this.fileName = file.name;
  //       this.fileSize = file.size;
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         this.csvContent = reader.result as string;
  //       };
  //       reader.readAsText(file);
  //     }
  //   }
  // }

  // submitFile(): void {
  //   // Add your submit logic here

  //   // For this example, just showing a success message
  //   this.submitted = true;
  // }
  csvContent: string = '';
  fileName: string = '';
  fileSize: number = 0;
  submitted: boolean = false;

  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {
      const file = files.item(0);
      if (file) {
        this.fileName = file.name;
        this.fileSize = file.size;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.csvContent = reader.result as string;
        };
        reader.readAsText(file);
      }
    }
  }

  submitFile(): void {
    this.submitted = true;
  }
}
