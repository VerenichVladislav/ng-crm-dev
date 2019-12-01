import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../../entity/city';
import {GlobalRootURL} from '../../GlobalRootURL';
import {translate_v2} from 'googleapis';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  private isActiveUser: boolean;
  private page;
  constructor(private http: HttpClient,
              private translate: TranslateService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.isActiveUser = localStorage.getItem('auth_token') !== null; // Пофиксить!
  }

  ru() {
    this.translate.use('ru');
  }

  en() {
    this.translate.use('en');
  }

  // loadLang() {
  //   const URL = GlobalRootURL.BASE_API_URL + 'international';
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   let options = { headers: headers };
  //   this.http.get<any>(URL, options).subscribe(resp => {
  //     this.page = resp;
  //   });
  // }
}
