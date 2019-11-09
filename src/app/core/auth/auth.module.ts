import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterService} from './shared/register.service';
import {LoginService} from './shared/login.service';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    RegisterService,
    LoginService
  ]
})
export class AuthModule { }
