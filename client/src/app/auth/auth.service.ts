import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthApiService } from '../services/api/common/auth-api.service';
import { User, UserRegistration } from 'src/app/models/user';
import { NotificationService } from '../services/notifications/notification.service';
import { IdInterface } from '../models/base-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN_KEY = 'authToken';
  authState = new BehaviorSubject<boolean>(this.isLogged());

  constructor(
    private authApiService: AuthApiService,
    private notificationService: NotificationService
  ) {}

  public register(user: UserRegistration): Observable<any> {
    return this.authApiService.register(user);
  }

  public login(user : UserRegistration): Observable<IdInterface> {

    return this.authApiService.login(user).pipe(
      map((response) => {
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(response));
        this.authState.next(true);
        this.notificationService.success('You have been logged in');
        return response;
      })
    );
  }

  public logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authState.next(false);
    this.notificationService.success('You have been logged out');
  }

  public isLogged(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public getUserId(): string | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const userId = token ? JSON.parse(token).id : null;
    return userId;
  }
}
