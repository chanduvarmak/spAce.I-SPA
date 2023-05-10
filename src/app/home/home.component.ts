import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //   n!: number;
  //   r!: number;
  //   combinations: number[][] = [];
  //   // Method to generate the combinations 
  //   generateCombinations() {
  //     this.combinations = [];
  //     // Generate an array of integers from 1 to n
  //     const arr = Array.from({ length: this.n }, (_, i) => i + 1);
  //     // Generate all combinations of size r
  //     const helper = (start: number, current: number[]) => {
  //       if (current.length === this.r) {
  //         this.combinations.push(current);
  //       } else {
  //         for (let i = start; i < arr.length; i++) {
  //           helper(i + 1, [...current, arr[i]]);
  //         }
  //       }
  //     };
  //     helper(0, []);
  //   }
}
