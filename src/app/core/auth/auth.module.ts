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
import {TranslateModule} from '@ngx-translate/core';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {RouterModule} from "@angular/router";
import { RestorePasswordDialogComponent } from './components/login/restore-password-dialog/restore-password-dialog.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    IdentityPasswordDirective,
    RestorePasswordDialogComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    RestorePasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
  ],
  entryComponents: [
    RestorePasswordDialogComponent
  ],
  providers: [
    RegisterService,
    LoginService
  ]
})
export class AuthModule { }
