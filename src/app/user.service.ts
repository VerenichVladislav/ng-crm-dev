import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient){ }

  getUserById(id: number): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem("auth_token"));
    let options = { headers: headers };


    return this.http.get<User>('http://localhost:8090/users/' + id, options);
  }

  getByUserName(name: string): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem("auth_token"));

    let options = { headers: headers };


    return this.http.get<User>('http://localhost:8090/users/?userName=' + name, options);
  }
}
