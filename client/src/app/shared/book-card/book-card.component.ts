import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!: Book;

  constructor() {}

  ngOnInit() {}



}
