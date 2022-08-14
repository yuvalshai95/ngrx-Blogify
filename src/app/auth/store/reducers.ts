import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from 'src/app/auth/types/auth-state.interface';
import { registerAction } from 'src/app/auth/store/actions';

const initialState: AuthState = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthState => ({ ...state, isSubmitting: true }))
);

export function authReducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}