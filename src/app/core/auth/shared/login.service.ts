import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginURL = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string): Observable<any> {
    let body = {
      username: userName,
      password: password
    };

    let options = {
      observe: <'body'>'response'
    };

    return this.http.post<any>(this.loginURL, body, options);
  }
}
