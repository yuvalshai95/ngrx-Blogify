import { createAction, props } from '@ngrx/store';

import { RegisterRequest } from 'src/app/auth/types/register-request-form.interfaces';
import { ActionTypes } from 'src/app/auth/store/actions/actionTypes';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';

// type is to help debug on redux
// props are values to pass to the reducer to use
export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequest }>());

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
