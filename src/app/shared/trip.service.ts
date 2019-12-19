import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalRootURL } from '../GlobalRootURL';
import { TripFilters } from '../entity/TripFilters'
import { Trip } from '../entity/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  city:any;
  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'trips/';
  constructor(private http: HttpClient) {}
  tripFilter: TripFilters;
  trip: Trip;
  public setTripFilter(tripFilter:TripFilters){
    console.log(tripFilter.cityFrom);
    this.tripFilter = tripFilter;
  }
  public setTrip(trip: Trip){
    this.trip = trip;
  }
  public getTripObj(): Trip{
    return this.trip;
  }
  getTrip(id): any {
    return this.http.get(this.ROOT_URL + id);
  }
  getCityName(id:any):any {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers, responseType:'text' as 'json'};
    return this.http.get<any>(GlobalRootURL.BASE_API_URL + 'cities/name/' + id, options)
    }

  getTransportName(id:any):any {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers, responseType:'text' as 'json'};
    return this.http.get<any>(GlobalRootURL.BASE_API_URL + 'transports/name/' + id, options)
    }
  }
