import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from 'src/app/auth/types/auth-state.interface';

// To what feature(state) there should be access
export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

// Getting only isSubmitting property from the auth state(feature)
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors
);
