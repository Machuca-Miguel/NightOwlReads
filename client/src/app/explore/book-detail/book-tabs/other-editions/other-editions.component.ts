import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-other-editions',
  templateUrl: './other-editions.component.html',
  styleUrls: ['./other-editions.component.scss']
})
export class OtherEditionsComponent {
  @Input() book!: Book;
}