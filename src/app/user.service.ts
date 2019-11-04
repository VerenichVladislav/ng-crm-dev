import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBbGV4IiwiZXhwIjoxNTczMTUzMjQ4fQ.r6E5ycSDqug2droCUmciIMcl-IUWmjbLVwUHlCBcmNFMEccegF2lQZ8IHPQ7MGUzEubMmmQbSZs__7BqAtDHsw';
  constructor(private http: HttpClient){ }

  getUserById(id: number): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', `Bearer ${this.authToken}`);

    let options = { headers: headers };


    return this.http.get<User>('http://localhost:8090/users/' + id, options);
  }

  getUserUserName(name: string): Observable<User>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', `Bearer ${this.authToken}`);

    let options = { headers: headers };


    return this.http.get<User>('http://localhost:8090/users/?userName=' + name, options);
  }
}
