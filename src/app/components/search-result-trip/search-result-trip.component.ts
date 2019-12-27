import { Component, OnInit, Injectable, Input } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import {GlobalRootURL} from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/entity/trip';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/entity/hotel';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { CityService } from 'src/app/shared/city.service';
import { TripDTO } from 'src/app/entity/TripDTO';
import {Location} from "@angular/common";


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
  cnt:TripDTO[] = [];
  Hotels:Observable<Hotel[]>;
  cityFrom: any;
  cityDest: any;
  object:Trip;
  page: number = 0;
  len: number;
  config: any;
  par:any;

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
    this.checkCnt();
  }

  checkCnt(){
    let body = this.service.tripFilter;

    let options = {
     body:body
    };
    this.http.post<TripDTO[]>(this.URLTRIP + "/cnt",body).subscribe(
      cn=>{
        this.cnt = cn;
        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.cnt.length
        };
      }
    );
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
    pageChanged(event){
    this.par=event-1;
    this.config.currentPage = event;
    let body = this.service.tripFilter;
    this.page = this.page - 1;
    this.len=10;

    let options = {
     body:body
    };
    this.http.post<TripDTO[]>(this.URLTRIP + "/dto",body,{params:{
      pageNo: this.par
    }}).subscribe(
      post=>{
        this.posts = post;
      }
    );
    }

}
