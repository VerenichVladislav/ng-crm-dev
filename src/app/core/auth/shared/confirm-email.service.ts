import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmEmailService {
  private confirmURL = 'http://localhost:8090/users/sendConfirm/?userName=';
  constructor(private http: HttpClient) { }

  confirmEmail(userName: string): Observable<any> {
    return this.http.get<any>(this.confirmURL + userName);
  }
}
