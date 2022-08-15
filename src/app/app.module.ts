import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { authReducers } from './auth/store/reducers';

// run redux devtool only in dev not in production
const DEV = environment.production ? [] : [StoreDevtoolsModule.instrument({ maxAge: 50 })];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    // StoreModule.forRoot({register: authReducers}),
    EffectsModule.forRoot([]),
    ...DEV,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
