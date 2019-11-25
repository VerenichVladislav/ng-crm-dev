import { Injectable } from '@angular/core';
import {Ticket} from '../entity/ticket';
import {Observable} from 'rxjs';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../entity/hotel';
import { HotelFilters } from '../entity/HotelFilters';

@Injectable({
  providedIn: 'root'
})
export  class HotelService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'hotels/';

  constructor(private http: HttpClient){ }
  hotelFilter:HotelFilters
 public setHotelFilter(hotelFilter:HotelFilters){
   
   
    this.hotelFilter = hotelFilter;
    console.log(hotelFilter.city);
    
  }
  getById(id: number): Observable<Hotel>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };
    return this.http.get<Hotel>(this.URL + id, options);
  }
}
