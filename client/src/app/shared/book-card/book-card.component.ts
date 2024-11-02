import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';
import { Book } from 'src/app/models/book-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Book;

  constructor(public router: Router) {}

  public onIconButtonClick(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty('--click-x', `${x}px`);
    button.style.setProperty('--click-y', `${y}px`);
  }

  public navigateTo(): void {
    this.router.navigate([ 'explore/book-detail', this.book.id]);
  }
}
