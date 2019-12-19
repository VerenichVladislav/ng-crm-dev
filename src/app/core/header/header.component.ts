import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from "../../shared/user.service";
import {AdminService} from "../admin/shared/admin.service";
import {DataTransferService} from "../../shared/data-transfer.service";
import { Router } from '@angular/router';
import {User} from "../../entity/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  private isActiveUser: boolean;
  private isActiveAdmin: boolean;
  constructor(private http: HttpClient,
              private translate: TranslateService,
              private transfer: DataTransferService,
              private userService: UserService,
              private adminService: AdminService,
              private router: Router) {}

  ngOnInit() {
    // this.adminService.isAuthenticated().subscribe(
    //   () => {
    //     this.isActiveAdmin = true;
    //     this.isActiveUser = true;
    //   }
    // );
    //
    // this.userService.isAuthenticated().subscribe(
    //   () => {
    //     this.isActiveAdmin = false;
    //     this.isActiveUser = true;
    //   }
    // );
  }

  ngDoCheck() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if(!user) {
      this.isActiveUser = false;
      this.isActiveAdmin = false;
    } else {
      if (user.role == 'ADMIN') {
        this.isActiveAdmin = true;
        this.isActiveUser = true;

      } else if (user.role == 'USER') {
        this.isActiveUser = true;
        this.isActiveAdmin = false;
      }
    }
  }
  chat(){
    this.router.navigate(['/chat']);
    }

  ru() {
    this.translate.use('ru');
  }

  en() {
    this.translate.use('en');
  }
}
