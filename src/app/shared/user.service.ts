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

  constructor(private http: HttpClient){ }

  getUserById(id: number): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };


    return this.http.get<User>(this.URL + id, options);
  }

  getByUserName(name: string): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem("auth_token"));

    let options = { headers: headers };

    return this.http.get<User>('http://localhost:8090/users/?userName=' + name, options);
  }

  updateUser(userName: string) {
    const user = JSON.stringify(this.getByUserName(userName));
    localStorage.removeItem('user');
    localStorage.setItem('user', user);
  }
}
