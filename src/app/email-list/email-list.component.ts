import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import email from './constants/email.json';
@Component({
  selector: 'email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EmailListComponent implements OnInit {
  pageNum: number;
  filteredItems: [];
  searchTerm: string;
  constructor() {}

  onPageChanged(event) {
    this.pageNum = event;
  }

  ngOnInit() {
    this.filteredItems = email;
    this.pageNum = 1;
    this.searchTerm = '';
  }
}
