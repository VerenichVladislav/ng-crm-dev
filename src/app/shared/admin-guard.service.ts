import { Injectable } from '@angular/core';
import {of} from "rxjs/internal/observable/of";
import {CanActivate, Router} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {AdminService} from "../core/admin/shared/admin.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(public adminService: AdminService, protected router: Router) { }

  canActivate() {
    return this.adminService.isAuthenticated().pipe(
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
