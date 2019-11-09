import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private usersURL = 'http://localhost:8090/users';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any>{
    let headers = new HttpHeaders(
      {'Content-Type': 'application/json'});
    let body = user;
    body.setRole("USER");
    let options = {
      headers: headers ,
      observe: <'body'>'response'
    };

    return this.http.post<any>(this.usersURL, body, options);
  }
}
