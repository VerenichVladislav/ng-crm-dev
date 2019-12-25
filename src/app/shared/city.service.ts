import { Injectable } from '@angular/core';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ticket} from '../entity/ticket';
import {Observable} from 'rxjs';
import {City} from '../entity/city';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city: Observable<City[]>;

  readonly URL = GlobalRootURL.BASE_API_URL + 'cities/';

  constructor(private http: HttpClient){ }

  getById(id: number): Observable<City>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };


    return this.http.get<City>(this.URL + id, options);
  }

  loadCity(id: number): Observable<City> {
    return this.getById(id).pipe(
      map((city: City) => {
          return new City(city);
        }
      )
    );
  }
}
