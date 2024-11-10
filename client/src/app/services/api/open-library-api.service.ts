import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorResponse, AuthorDetailsResponse } from './open-library-api.interfaces';
import { Author } from 'src/app/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryApiService {
  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  getAuthorInfo(authorName: string): Observable<AuthorResponse> {
    const url = `${this.baseUrl}/search/authors.json?q=${encodeURIComponent(authorName)}`;
    return this.http.get<AuthorResponse>(url);
  }

  getAuthorDetails(authorKey: string): Observable<AuthorDetailsResponse> {
    const url = `${this.baseUrl}/authors/${authorKey}.json`;
    return this.http.get<AuthorDetailsResponse>(url).pipe(
      map(response => Author.create(response))
    );
  }
}
