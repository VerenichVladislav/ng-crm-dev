import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {UserService} from "./user.service";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public auth: UserService, protected router: Router) { }

  canActivate() {
    return this.auth.isAuthenticated().pipe(
      map(() => {
        return true;
        }),
      catchError(() => {
        this.router.navigate(['/']);
        return of(false);
      }
     ))
  }
}
