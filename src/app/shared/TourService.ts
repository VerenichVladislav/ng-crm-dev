import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TourFilter } from '../entity/TourFilter';
import { Tour } from '../entity/Tour';

@Injectable({
  providedIn: 'root'
})
export  class TourService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'hotels/';

  constructor(private http: HttpClient){ }
  TourFilter:TourFilter;
  public setTourFilter(Filter:TourFilter){
    this.TourFilter = Filter;
  }
  getById(id: number): Observable<Tour>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };
    return this.http.get<Tour>(this.URL + id, options);
  }
}
