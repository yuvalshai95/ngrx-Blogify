import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { BackendErrors } from './backendErrors.interface';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrors | null;
}
