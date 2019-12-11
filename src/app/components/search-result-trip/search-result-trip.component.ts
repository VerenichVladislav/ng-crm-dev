import { Component, OnInit, Injectable, Input } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import {GlobalRootURL} from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/entity/trip';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/entity/hotel';
import { HotelService } from 'src/app/shared/hotel.service';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { post } from 'selenium-webdriver/http';
import { element } from 'protractor';
import { City } from 'src/app/entity/city';
import { CityService } from 'src/app/shared/city.service';
import {map} from "rxjs/operators";

``

@Component({
  selector: 'app-search-result-trip-component',
  templateUrl: './search-result-trip.component.html',
  styleUrls: ['./search-result-trip.component.css']
})
@Injectable()
export class SearchResultTripComponent implements OnInit {
  readonly URL = GlobalRootURL.BASE_API_URL + 'trips';
  readonly URL2 = GlobalRootURL.BASE_API_URL + 'hotels';
  posts:Trip[] = [];
  Hotels:Observable<Hotel[]>;
  cityFromArr: string[] = [];
  cityDestArr: string[] = [];
  cityFrom: any;
  cityDest: any;
  object:Trip;
  i: number;
  constructor(public service: TripService,
    private http: HttpClient,
    private cityService:CityService,
    private router: Router) 
    {}

  ngOnInit() {
    this.getPosts();
    this.getHotelByCity();
  }
  
  getPosts(){
    let body = this.service.tripFilter;

    let options = {
     body:body
    };
    this.http.post<Trip[]>(this.URL,body).subscribe(
      post=>{
        this.posts = post;
        // let post1 = post;
        post.forEach(data => {
          
          this.service.getCityName(data.cityFrom).subscribe(
            (log: string) => {
              data.cityFromName = log;
              }
            );
            this.service.getCityName(data.cityDest).subscribe(
              (log: string) => {
                data.cityDestName = log;
                }
              );
            
            
        });
      }
    );
    
    
  }
  
  loadCity(trip : Trip): Observable<City> {
    return this.cityService.getById(trip.cityFrom).pipe(
      map((city: City) => {
          return new City(city);
        }
      )
    );
  }

  // getCities(): Observable<City[]>{
  //   for (this.i=0; this.i>post.length; this.i++){
  //       return this.cityFrom.push(this.loadCity(this.posts[this.i]))
  //   }
  //}


  Buy(trip:Trip){
    this.object = trip;
    this.service.setTrip(this.object);
    // this.router.navigate(['BuyTicketComponent']);
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
