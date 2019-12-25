import { Component, OnInit, Injectable, Input } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import {GlobalRootURL} from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/entity/trip';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/entity/hotel';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { City } from 'src/app/entity/city';
import { CityService } from 'src/app/shared/city.service';
import {map} from "rxjs/operators";
import { TripDTO } from 'src/app/entity/TripDTO';
import {Location} from "@angular/common";

``

@Component({
  selector: 'app-search-result-trip-component',
  templateUrl: './search-result-trip.component.html',
  styleUrls: ['./search-result-trip.component.css']
})
@Injectable()
export class SearchResultTripComponent implements OnInit {
  readonly URLTRIP = GlobalRootURL.BASE_API_URL + 'trips';
  readonly URLHOTEL = GlobalRootURL.BASE_API_URL + 'hotels';
  posts:TripDTO[] = [];
  Hotels:Observable<Hotel[]>;
  cityFrom: any;
  cityDest: any;
  object:Trip;
  page: number = 0;
  len: number;
  constructor(public service: TripService,
    private http: HttpClient,
    private cityService:CityService,
    private router: Router,
    private location: Location)
    {
    }

  ngOnInit() {
    this.getPosts();
    this.getHotelByCity();
    console.log(this.posts);
  }

  goBack() {
    this.location.back();
  }

  getPosts(){
    let body = this.service.tripFilter;

    let options = {
     body:body
    };
    this.http.post<TripDTO[]>(this.URLTRIP + "/dto",body).subscribe(
      post=>{
        this.posts = post;
      }
    );
  }
  findbyCity(hotel:Hotel){
    this.router.navigate(['/SearchResult', hotel.hotelId]);
    console.log(hotel.hotelId);
  }
  Buy(trip:Trip){
    this.object = trip;
    this.service.setTrip(this.object);
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
    this.Hotels = this.http.post<Hotel[]>(this.URLHOTEL,body);
  }
  NextPage(){
    let body = this.service.tripFilter;
    this.page = this.page + 1;
    console.log(this.posts.length);
    this.len=this.posts.length;

    let options = {
     body:body
    };
    this.http.post<TripDTO[]>(this.URLTRIP + "/dto",body,{params:{
      pageNo: this.page.toString()
    }}).subscribe(
      post=>{
        this.posts = post;
      }
    );
  }
  PreviousPage(){  
    let body = this.service.tripFilter;
    this.page = this.page - 1;
    this.len=10;

    let options = {
     body:body
    };
    this.http.post<TripDTO[]>(this.URLTRIP + "/dto",body,{params:{
      pageNo: this.page.toString()
    }}).subscribe(
      post=>{
        this.posts = post;
      }
    );}

}
