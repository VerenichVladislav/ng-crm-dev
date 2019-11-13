import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {AuthModule} from './core/auth/auth.module';
import {FilterComponent} from './core/auth/components/filter/filter.component';
import {ParcingFlightComponent} from './core/auth/components/parcing-flight/parcing-flight.component';
import {FlightsService} from './flights.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    FilterComponent,
    ParcingFlightComponent,
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
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]),
    ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
