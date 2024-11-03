import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-tabs',
  templateUrl: './book-tabs.component.html',
  styleUrls: ['./book-tabs.component.scss'],
})
export class BookTabsComponent implements OnInit {
  @Input() book!: Book;
  selectedIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedIndex = 0;
    });
  }
}
