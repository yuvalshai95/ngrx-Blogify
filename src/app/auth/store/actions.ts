import { createAction, props } from '@ngrx/store';

import { RegisterRequest } from './../types/register-request-form.interfaces';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequest }>());
