// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// ================

import { AppComponent } from './app.component';
import { interceptorProviders } from './core/interceptors/interceptors';
import { reducers } from './store/reducers';
import { environment } from '../environments/environment';
import { ApiItemsEffect } from './store/effects/api-items.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ApiItemsEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [interceptorProviders],
})
export class AppModule {}
