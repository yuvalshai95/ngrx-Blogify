import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { RegisterRequest } from 'src/app/auth/types/register-request-form.interfaces';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { AuthResponse } from 'src/app/auth/types/auth-response.interface';

const BASE_URL = 'https://api.realworld.io/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = BASE_URL + '/users';
    return this.http.post<AuthResponse>(url, data).pipe(map((res: AuthResponse) => res.user));
  }
}
