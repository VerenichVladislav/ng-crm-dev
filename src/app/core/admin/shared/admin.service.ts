import { Injectable } from '@angular/core';
import {GlobalRootURL} from "../../../GlobalRootURL";
import {Observable} from "rxjs/index";
import {User} from "../../../entity/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'admin/';

  constructor(private http: HttpClient) { }

  lockUser(userId): Observable<void>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<void>(this.URL + 'lockUser/?userId=' + userId, options);
  }

  unlockUser(userId): Observable<void> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<void>(this.URL + 'unlockUser/?userId=' + userId, options);
  }

  isAuthenticated(): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<any>(this.URL + 'isAuthenticated' , options);
  }
}
