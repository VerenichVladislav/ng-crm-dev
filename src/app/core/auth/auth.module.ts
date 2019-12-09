import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterService} from './shared/register.service';
import {LoginService} from './shared/login.service';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import {IdentityPasswordDirective} from './shared/identity-password.directive';
import {translate_v2} from 'googleapis';
import {TranslateModule} from '@ngx-translate/core';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    IdentityPasswordDirective
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    RegisterService,
    LoginService
  ]
})
export class AuthModule { }
