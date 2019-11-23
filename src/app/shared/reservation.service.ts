import { Injectable } from '@angular/core';
import {Ticket} from '../entity/ticket';
import {Observable} from 'rxjs';
import {GlobalRootURL} from '../GlobalRootURL';
import {Hotel} from '../entity/hotel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reservation} from '../entity/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  readonly URL = GlobalRootURL.BASE_API_URL + 'reservations/buyer/';

  constructor(private http: HttpClient){ }

  getAllByBuyerId(id: number): Observable<Reservation[]>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };
    return this.http.get<Reservation[]>(this.URL + id, options);
  }
}
