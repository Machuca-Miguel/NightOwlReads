import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRegistration } from 'src/app/models/user';
import { BaseApiService } from './base-api.service';
import { IdInterface } from 'src/app/models/base-model';

@Injectable({ providedIn: 'root' })
export class AuthApiService extends BaseApiService {
  public showLoginModal$ = new BehaviorSubject<boolean>(true);

  constructor(http: HttpClient) {
    super(http);
  }
  // Método para registrar un nuevo usuario
  register(user: UserRegistration): Observable<void> {
    return this.post('auth/register', user);
  }

  // Método para iniciar sesión
  login( user : UserRegistration): Observable<IdInterface> {
    return this.post('auth/login', user);
  }

}
