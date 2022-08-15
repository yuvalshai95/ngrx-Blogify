import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

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
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );

  // load$ = createEffect(() => this.actions$.pipe(
  //     ofType('loadEvents'),
  //     mergeMap(() => this.http.get<EventModel[]>('/api/event')),
  //     map(events => eventsLoaded({events}))
  //   ));

  constructor(
    public readonly actions$: Actions,
    public readonly authService: AuthService,
    public readonly router: Router
  ) {}
}
