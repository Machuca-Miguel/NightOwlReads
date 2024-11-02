import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() book!: Book;
}