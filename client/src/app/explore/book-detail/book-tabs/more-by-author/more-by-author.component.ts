import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-more-by-author',
  templateUrl: './more-by-author.component.html',
  styleUrls: ['./more-by-author.component.scss']
})
export class MoreByAuthorComponent {
  @Input() book!: Book;
}