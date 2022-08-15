import { BackendErrors } from './../types/backendErrors.interface';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';
import { AuthService } from '../services/auth.service';
import { RegisterRequest } from '../types/register-request-form.interfaces';
import { AuthState } from '../types/auth-state.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors | null>;

  // constructor(private store: Store<{ register: AuthState }>, public readonly service: AuthService) {}
  constructor(private store: Store, public readonly service: AuthService) {}

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    // this.isSubmitting$ = this.store.select((state: { register: AuthState }) => state.register.isSubmitting);
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(formValues: { username: string; email: string; password: string }) {
    const request: RegisterRequest = {
      user: { ...formValues },
    };
    this.store.dispatch(registerAction({ request }));
  }
}
