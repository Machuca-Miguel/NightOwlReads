import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() bookList: Book[] = [];
  @Input() viewType: 'cards' | 'list' = 'cards'; 

  constructor() {}

  ngOnInit() {}



}
