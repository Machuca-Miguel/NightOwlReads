import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService {
  protected baseUrl: string = "http://localhost:4000/api";

  constructor(protected http: HttpClient) {}

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  protected post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body);
  }

  protected put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body);
  }

  protected delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`);
  }
}
