import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ConnectionErrorComponent} from './connection-error/connection-error.component';
import {SuccessfulChangingPasswordComponent} from "./successful-changing-password/successful-changing-password.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NoMoneyComponent} from "./no-money/no-money.component";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {

  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {}

  openErrorConnection() {
    this.snackBar.openFromComponent(ConnectionErrorComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSuccessfulChangingPassword() {
    this.snackBar.openFromComponent(SuccessfulChangingPasswordComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openNotFound() {
    this.snackBar.openFromComponent(NotFoundComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  openNoMoney() {
    this.snackBar.openFromComponent(NoMoneyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
