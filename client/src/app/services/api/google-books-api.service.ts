import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchBooksResponse } from 'src/app/models/book-model';
import { BookDetailsResponse } from '../../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  // Método genérico para hacer solicitudes GET a la API de Google Books
  private get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  // Método para buscar libros por término de búsqueda
  searchBooks(searchTerm: string): Observable<SearchBooksResponse> {
    return this.get<SearchBooksResponse>(`${this.apiUrl}?q=${searchTerm}`);
  }

  // Método para obtener detalles de un libro por su ID
  getBookDetails(bookId: string): Observable<BookDetailsResponse> {
    return this.get<BookDetailsResponse>(`${this.apiUrl}/${bookId}`);
  }

  // Método para obtener libros por autor
  getBooksByAuthor(author: string): Observable<SearchBooksResponse> {
    return this.get<SearchBooksResponse>(`${this.apiUrl}?q=inauthor:${author}`);
  }

  // Método para obtener libros por categoría
  getBooksByCategory(category: string): Observable<SearchBooksResponse> {
    return this.get<SearchBooksResponse>(`${this.apiUrl}?q=subject:${category}`);
  }

  // Método para obtener libros populares por región
  getPopularBooks(region: string): Observable<SearchBooksResponse> {
    return this.get<SearchBooksResponse>(`${this.apiUrl}/popular?region=${region}`);
  }
}
