import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

// run redux devtool only in dev not in production
const DEV = environment.production ? [] : [StoreDevtoolsModule.instrument({ maxAge: 50 })];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, AuthModule, StoreModule.forRoot({}), ...DEV],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
