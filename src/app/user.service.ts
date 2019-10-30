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
    let authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBbGV4IiwiZXhwIjoxNTczMTUzMjQ4fQ.r6E5ycSDqug2droCUmciIMcl-IUWmjbLVwUHlCBcmNFMEccegF2lQZ8IHPQ7MGUzEubMmmQbSZs__7BqAtDHsw';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', `Bearer ${authToken}`);

    let options = { headers: headers };


    return this.http.get<User>('http://localhost:8090/users/' + id, options);
  }
}
