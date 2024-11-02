import { Book } from './../../models/book-model';
import { Component, OnInit } from '@angular/core';
import { GoogleBooksApiService } from '../../services/api/google-books-api.service';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchQuery: string = '';
  public bookList: Book[] = [];

  constructor(public googlebooksApi: GoogleBooksApiService) {}

  ngOnInit() {}

  handleSearch(query: string) {
    this.searchQuery = query;
    this.googlebooksApi.searchBooks(query).subscribe((data) => {
      this.bookList = data.items.map((book) => {
        return Book.createFromGoogleBookResponse(book);
      })
      console.log(this.bookList);


    });

  }
}
