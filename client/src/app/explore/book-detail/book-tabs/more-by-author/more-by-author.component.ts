import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model';
import { GoogleBooksApiService } from 'src/app/services/api/google-books-api.service';

@Component({
  selector: 'app-more-by-author',
  templateUrl: './more-by-author.component.html',
  styleUrls: ['./more-by-author.component.scss'],
})
export class MoreByAuthorComponent implements OnInit {
  @Input() book!: Book;
  public authorBookList!: Book[];
  constructor(private googlebooksApi: GoogleBooksApiService) {}

  ngOnInit() {
    this.googlebooksApi
      .getBooksByAuthor(this.book.getAuthors())
      .subscribe((bookResponse) => {
        console.log(bookResponse);
        this.authorBookList = bookResponse.items.map((book) => {
          return Book.createFromGoogleBookResponse(book);
        });
      });
  }
}
