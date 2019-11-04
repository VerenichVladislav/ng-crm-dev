import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './core/header/header.component';

import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {AuthModule} from './core/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,

    AuthModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
    ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
