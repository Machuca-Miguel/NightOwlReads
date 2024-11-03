import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiUrl = 'https://ipapi.co/json/';

  constructor(private http: HttpClient) {}

  getRegion(): Observable<{ country: string }> {
    return this.http.get<{ country: string }>(this.apiUrl);
  }
}