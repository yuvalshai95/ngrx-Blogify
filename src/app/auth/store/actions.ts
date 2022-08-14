import { createAction, props } from '@ngrx/store';

import { RegisterRequest } from './../types/register-request-form.interfaces';
import { ActionTypes } from './actionTypes';
// type is to help debug on redux
// props are values to pass to the reducer to use
export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequest }>());
