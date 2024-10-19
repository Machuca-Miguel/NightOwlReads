import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './common/base-api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService extends BaseApiService {
  private authService: AuthService;

  constructor(http: HttpClient, authService: AuthService) {
    super(http);
    this.authService = authService;
  }

  public getUserInfo(): Observable<User | null> {
    const userId = this.authService.getUserId();
    return this.get<User>(`user/${userId}`).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}
