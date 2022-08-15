import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/register/register.component';
import { authReducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegisterEffects } from 'src/app/auth/store/effects/register.effects';

const ROUTES = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([RegisterEffects]),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
  exports: [FormsModule],
})
export class AuthModule {}
