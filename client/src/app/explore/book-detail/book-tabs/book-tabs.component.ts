import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book-model';
@Component({
  selector: 'app-book-tabs',
  templateUrl: './book-tabs.component.html',
  styleUrls: ['./book-tabs.component.scss'],
})
export class BookTabsComponent implements OnInit {
  @Input() book!: Book;

  ngOnInit(): void {}
}
