import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalRootURL} from '../../../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class ConfirmEmailService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'users/sendConfirm/?userName=';
  constructor(private http: HttpClient) { }

  confirmEmail(userName: string): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<any>(this.URL + userName, options);
  }
}
