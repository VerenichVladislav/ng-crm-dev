import { Injectable } from '@angular/core';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import {Ticket} from '../entity/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'tickets/buyer/';

  constructor(private http: HttpClient){ }

  getAllByBuyerId(id: number): Observable<Ticket[]>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };
    return this.http.get<Ticket[]>(this.URL + id, options);
  }

  submitForm(data: any, count: number, tripid: number, userid: number): Observable<any> {
    console.log(data);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers, responseType:'text' as 'json'};
    return this.http.post<any>(GlobalRootURL.BASE_API_URL + 'trips/'+userid +'/'+tripid+'/buy?count='+count, data, options);
  }
}
