import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(formValues) {
    this.store.dispatch(registerAction(formValues));
  }
}
