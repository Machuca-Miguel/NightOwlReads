import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseApiService } from './common/base-api.service';
import { Achievement } from 'src/app/models/achievement-model';

@Injectable({
  providedIn: 'root',
})
export class AchievementApiService extends BaseApiService {
  private apiUrl = 'achievements';

  constructor(http: HttpClient) {
    super( http );
  }

  getAchievements(userId: string): Observable<Achievement[]> {
    return this.get<Achievement[]>(`${this.apiUrl}/user/${userId}`).pipe(
      catchError(this.handleError<Achievement[]>('getAchievementsByUserId', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
