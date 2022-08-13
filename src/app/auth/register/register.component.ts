import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { registerAction } from '../store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(formValues) {
    console.log(formValues);
    this.store.dispatch(registerAction(formValues));
  }
}
