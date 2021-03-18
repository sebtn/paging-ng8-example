import { Component } from '@angular/core';

import email from './constants/email.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Angular 2 simple pagination";
    items = email;
    pagination = {
      pageSize: 25,
      offset: 0,
      total: email.length
    }


  // find the number of calls to make
  // or how to spilt in batch calls
  // sln =>  write a function that takes in pagination 
  // information to make the list focus
  // on the elements we want by having two numbers.
 constructor() {
  console.log('a', this.pagination, email)

 }

}
