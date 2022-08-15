import { registerSuccessAction, registerFailureAction } from './actions/register.action';
import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from 'src/app/auth/types/auth-state.interface';

// Actions
import { registerAction } from 'src/app/auth/store/actions/register.action';

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthState => ({ ...state, isSubmitting: true, validationErrors: null })),

  on(
    registerSuccessAction,
    (state, payload): AuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: payload.currentUser,
    })
  ),

  on(
    registerFailureAction,
    (state, payload): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: payload.errors,
    })
  )
);

export function authReducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}
