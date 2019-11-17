import { Injectable } from '@angular/core';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import {Ticket} from '../entity/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private URL = GlobalRootURL.BASE_API_URL + 'tickets/buyer/';

  constructor(private http: HttpClient){ }

  getAllByBuyerId(id: number): Observable<Ticket[]>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };


    return this.http.get<Ticket[]>(this.URL + id, options);
  }
}
