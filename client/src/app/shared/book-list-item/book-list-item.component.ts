import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book!: Book;

  constructor(private router: Router) {}

  public navigateToDetails(): void {
    this.router.navigate([ 'explore/book-detail', this.book.id]);
  }

  public onIconButtonClick(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty('--click-x', `${x}px`);
    button.style.setProperty('--click-y', `${y}px`);
  }

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}