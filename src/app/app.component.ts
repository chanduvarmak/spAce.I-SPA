import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // // ChannelName = 'chanduvarma';
  // constructor() {
  //   this.myMethod();
  // }
  // // title = 'demoproject';
  // myMethod() {
  //   let name = 'chandu';
  //   if (name === 'chandu') {
  //     console.log(name);
  //   }
  // }
}
