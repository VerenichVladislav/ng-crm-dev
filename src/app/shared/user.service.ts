import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../entity/user';
import { Observable } from 'rxjs';
import {GlobalRootURL} from '../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'users/';

  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<User[]> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let body: any = {
      role: "USER"
    };
    let options = { headers: headers };

    return this.http.post<User[]>(this.URL + 'filter', body, options);
  }

  getUserById(id: number): Observable<User> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };


    return this.http.get<User>(this.URL + id, options);
  }

  getByUserName(name: string): Observable<User>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<User>(this.URL + '?userName=' + name, options);
  }

  isAuthenticated(): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<any>(this.URL + 'isAuthenticated' , options);
  }

  isLogin(): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<any>(this.URL + 'isLogin' , options);
  }

  isConfirmEmail(id: number): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<any>(this.URL + 'isEmailConfirmed/' + id, options);
  }

  sendPassword(userName: string): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json'});
    let options = { headers: headers };

    return this.http.get<any>(this.URL + 'sendPassword/?userName=' + userName, options);
  }

  updatePassword(userName: string, password: string) {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    let body: any = {
      userName: userName,
      hashPass: password
    };

    return this.http.put<any>(this.URL, body, options);
  }
}
