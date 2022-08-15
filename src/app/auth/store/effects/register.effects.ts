import { LocalstorageService } from './../../../shared/services/localstorage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from 'src/app/auth/store/actions/register.action';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';

@Injectable()
export class RegisterEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction), // registerAction has request in props so we can pass it to switchMap
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            this.localstorageService.setToLocalStorage('token', currentUser.token);
            return registerSuccessAction({ currentUser }); // Action 1
          }),
          catchError((httpErrorRes: HttpErrorResponse) => {
            // Action 2
            return of(registerFailureAction({ errors: httpErrorRes.error.errors })); // the api give back error object with error messages(the last .errors is from the api)
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  // load$ = createEffect(() => this.actions$.pipe(
  //     ofType('loadEvents'),
  //     mergeMap(() => this.http.get<EventModel[]>('/api/event')),
  //     map(events => eventsLoaded({events}))
  //   ));

  constructor(
    public readonly actions$: Actions,
    public readonly authService: AuthService,
    public readonly localstorageService: LocalstorageService,
    public readonly router: Router
  ) {}
}
