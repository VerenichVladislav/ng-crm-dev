import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {UserService} from "./user.service";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private auth: UserService, private router: Router) { }

  canActivate() {
    return this.auth.isLogin().pipe(
      map(() => {
        return true;
        }),
      catchError(() => {
        this.router.navigate(['/login']);
        return of(false);
      }
     ))
  }
}
