import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import {GlobalRootURL} from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/entity/trip';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/entity/hotel';
import { HotelService } from 'src/app/shared/hotel.service';
import { HotelFilters } from 'src/app/entity/HotelFilters';
``
@Component({
  selector: 'app-search-result-trip-component',
  templateUrl: './search-result-trip.component.html',
  styleUrls: ['./search-result-trip.component.css']
})
export class SearchResultTripComponent implements OnInit {
  readonly URL = GlobalRootURL.BASE_API_URL + 'trips';
  readonly URL2 = GlobalRootURL.BASE_API_URL + 'hotels';
  posts:Observable<Trip[]>;
  Hotels:Observable<Hotel[]>;


  constructor(public service: TripService,
    private http: HttpClient,
    private router: Router) 
    {
      this.getPosts();
      this.getHotelByCity();
     }

  ngOnInit() {
 
  }
  getPosts(){
    let body = this.service.tripFilter;

    let options = {
     body:body
    };
    this.posts = this.http.post<Trip[]>(this.URL,body);
   
     
   
  }
  filterHotel:HotelFilters;
  getHotelByCity(){
      this.filterHotel 
       =  {
      city: this.service.tripFilter.cityDest,
      CheckIn: this.service.tripFilter.dateFrom,
      CheckOut: null
     }
    
    let body = this.filterHotel;
    this.Hotels = this.http.post<Hotel[]>(this.URL2,body);
  }

}
