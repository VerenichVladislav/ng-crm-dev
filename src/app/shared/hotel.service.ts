import { Injectable } from '@angular/core';
import {Ticket} from '../entity/ticket';
import {Observable} from 'rxjs';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../entity/hotel';
import { HotelFilters } from '../entity/HotelFilters';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export  class HotelService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'hotels/';

  constructor(private http: HttpClient){ }
  hotelFilter:HotelFilters;
  public setHotelFilter(hotelFilter:HotelFilters){
    console.log(hotelFilter.city);
    this.hotelFilter = hotelFilter;


  }

  getById(id: number): Observable<Hotel>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<Hotel>(this.URL + id, options);
  }

  getAllHotels(filter: any={}, page: number=0,
                  pageSize: number=10): Observable<Hotel[]>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    let request = this.URL + '?page=' + page +
      '&pageSize=' + pageSize;

    return this.http.post<Hotel[]>(request, filter, options);
  }

  getByHotelName(name: string) {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<Hotel>(this.URL + '?hotelName=' + name, options);
  }

  loadHotel(id: number): Observable<Hotel> {
    return this.getById(id).pipe(
      map((hotel: Hotel) => {
          return new Hotel(hotel);
        }
      )
    );
  }

  deleteById(id: number): Observable<any>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.delete<any>(this.URL + id, options);
  }
}
