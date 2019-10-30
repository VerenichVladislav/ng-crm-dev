import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(userName: string, email: string, password: string): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = {
      email: email,
      role: "USER",
      userName: userName,
      firstName: "",
      lastName: "",
      hashPass: password,
      wallet: {}
    };
    let options = { headers: headers };

    return this.http.post<User>('https://localhost:8443/users', body, options);
  }
}
