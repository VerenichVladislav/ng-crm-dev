import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {UserService} from "./user.service";
import {MatDialog} from "@angular/material";
import {UnconfirmedEmailDialogComponent} from "../components/profile/unconfirmed-email-dialog/unconfirmed-email-dialog.component";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class EmailGuard implements CanActivate {
  constructor(private auth: UserService,
              private dialog: MatDialog) { }

  canActivate() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if(!user) {
      return false;
    }
    return this.auth.isConfirmEmail(user.userId).pipe(
      map((data: boolean) => {
        if(data == false) {
          this.dialog.open(UnconfirmedEmailDialogComponent, {
            width: '30%',
            data: JSON.parse(localStorage.getItem('user')).email,
          });
        }
        return data;
      }),
      catchError(() => {
        return of(false);
        }
      ))
  }

}
