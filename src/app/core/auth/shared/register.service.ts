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

  registerUser(userName: string, email: string, password: string): Observable<any>{
    let headers = new HttpHeaders(
      {'Content-Type': 'application/json'});
    let body = {
      email: email,
      role: "USER",
      userName: userName,
      firstName: "",
      lastName: "",
      hashPass: password,
      wallet: {}
    };
    let options = {
      headers: headers ,
      observe: <'body'>'response'
    };

    return this.http.post<any>(this.usersURL, body, options);
  }
}
