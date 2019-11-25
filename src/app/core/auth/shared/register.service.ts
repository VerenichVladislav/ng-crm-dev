import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../entity/user';
import {GlobalRootURL} from '../../../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'users';
  constructor(private http: HttpClient) { }
  registerUser(user: User, hashPass: string): Observable<any>{
    let headers = new HttpHeaders(

      {'Content-Type': 'application/json'});
    let body: any = user;
    body.role = 'USER';
    body.hashPass = hashPass;
    let options = {
      headers: headers ,
      observe: <'body'>'response'
    };

    return this.http.post<any>(this.URL, body, options);
  }
}
