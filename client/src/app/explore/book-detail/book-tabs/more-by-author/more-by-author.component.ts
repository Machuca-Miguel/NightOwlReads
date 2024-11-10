import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model';
import { GoogleBooksApiService } from 'src/app/services/api/google-books-api.service';
import { OpenLibraryApiService } from 'src/app/services/api/open-library-api.service';
import {
  AuthorDoc,
  AuthorResponse,
  AuthorDetailsResponse,
} from 'src/app/services/api/open-library-api.interfaces';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-more-by-author',
  templateUrl: './more-by-author.component.html',
  styleUrls: ['./more-by-author.component.scss'],
})
export class MoreByAuthorComponent implements OnInit {
  @Input() book!: Book;
  public authorBookList!: Book[];
  public authorDetails: Author | undefined;

  constructor(
    private googlebooksApi: GoogleBooksApiService,
    private openLibraryApi: OpenLibraryApiService
  ) {}

  ngOnInit() {
    this.googlebooksApi
      .getBooksByAuthor(this.book.getAuthors())
      .subscribe((bookResponse) => {
        this.authorBookList = bookResponse.items.map((book) => {
          return Book.createFromGoogleBookResponse(book);
        });
      });

    this.openLibraryApi
      .getAuthorInfo(this.book.getAuthors())
      .subscribe((authorResponse: AuthorResponse) => {
        const authorDoc = this.getAuthorDoc(authorResponse.docs);
        if (authorDoc) {
          const author = new Author(authorDoc);

          this.openLibraryApi
            .getAuthorDetails(author.key)
            .subscribe((authorDetails: AuthorDetailsResponse) => {
              this.authorDetails = author.mergeDetails(authorDetails);
              console.log(this.authorDetails);
            });
        } else {
          console.error('No author found with the specified criteria.');
        }
      });
  }

  private getAuthorDoc(docs: AuthorDoc[]): AuthorDoc | undefined {
    const validDocs = docs.filter(
      (doc: AuthorDoc) => doc.work_count > 0 && doc.birth_date
    );

    if (validDocs.length === 0) {
      return undefined;
    }

    validDocs.sort((a, b) => b.work_count - a.work_count);

    const topWorkMatch = validDocs.find(
      (doc) => doc.top_work && doc.top_work === this.book.title
    );

    if (topWorkMatch) {
      return topWorkMatch;
    }

    const nameMatch = validDocs.find(
      (doc) => doc.name && doc.name === this.book.getAuthors()
    );

    if (nameMatch) {
      return nameMatch;
    }

    return validDocs[0];
  }
}
