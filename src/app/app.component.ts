import { Component, ViewEncapsulation  } from '@angular/core';

import email from './constants/email.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Angular client side pagination';
  filteredItems = email;

  pageNum: number = 1;
  searchTerm = '';

  constructor() {
  }

  onPageChanged(event) {
    this.pageNum = event;
  }
}
