import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalRootURL} from '../../../GlobalRootURL';
import {User} from "../../../entity/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'login';

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string): Observable<any> {
    let body = {
      username: userName,
      password: password
    };

    let options = {
      observe: <'body'>'response'
    };

    return this.http.post<any>(this.URL, body, options);
  }
}
