import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-similar-books',
  templateUrl: './similar-books.component.html',
  styleUrls: ['./similar-books.component.scss']
})
export class SimilarBooksComponent {
  @Input() book!: Book;
}