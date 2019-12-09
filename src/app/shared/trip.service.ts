import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Injectable} from '@angular/core';
import {GlobalRootURL} from '../GlobalRootURL';
import {TripFilters} from '../entity/TripFilters'
import { Trip } from '../entity/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
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
}