import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../../entity/city';
import {GlobalRootURL} from '../../GlobalRootURL';
import {translate_v2} from 'googleapis';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from "../../shared/user.service";
import {AdminService} from "../admin/shared/admin.service";
import {DataTransferService} from "../../shared/data-transfer.service";

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
              private adminService: AdminService) {}

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('DoCheck');
    // this.isActiveUser = localStorage.getItem('auth_token') !== null; // Пофиксить!
    if (this.transfer.role$.getValue() !== undefined) {
      this.transfer.role$.subscribe(value => {
        if (value == 'ADMIN') {
          this.isActiveAdmin = true;
          this.isActiveUser = true;

        } else if (value == 'USER') {
          this.isActiveUser = true;
          this.isActiveAdmin = false;
        } else {
          this.isActiveUser = false;
          this.isActiveAdmin = false;
        }
      });
    }
    // if(!this.isActiveAdmin) {
    //   this.adminService.isAuthenticated().subscribe(
    //     () => {
    //       this.isActiveUser = true;
    //       this.isActiveAdmin = true;
    //     },
    //     () => {
    //       if(!this.isActiveUser) {
    //         this.userService.isAuthenticated().subscribe(
    //           () => {
    //             this.isActiveUser = true;
    //           }
    //         )
    //       }
    //     }
    //   )
    // }
  }

  ru() {
    this.translate.use('ru');
  }

  en() {
    this.translate.use('en');
  }
}
