import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel} from 'src/app/entity/hotel';
import { Observable } from 'rxjs';
import { room } from '../../entity/room';
import { Router, ActivatedRoute } from '@angular/router';
import {GlobalRootURL} from '../../GlobalRootURL';
import { HotelService } from 'src/app/shared/hotel.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {Location} from "@angular/common";


@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
@Injectable()
export class SearchResultComponent implements OnInit {
  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'hotels';
  posts: Observable<Hotel[]>;
  rooms: Observable<room[]>;
  ratingFilter: number;
  city:String;
  max:number = 3000;
  tickInterval:number = 100;
  min:number = 10;
  step:number = 100;
  value:number;
  parking:boolean = false;
  WIFI:boolean= false;
  SWIMMINGPOLL:boolean= false;
  SPA:boolean= false;
  BREAKFAST:boolean= false;
  RESEPTION:boolean= false;
  FITNESSCENTER:boolean= false;
  constructor(private http: HttpClient, private router: Router,
              private address :ActivatedRoute,
              private service:HotelService,
              private spinnerService: Ng4LoadingSpinnerService,
              private location: Location) {
    this.city = service.hotelFilter.city;
    console.log(this.city);

    this.getPosts();
  }
  hotelconveniences:string[] = [];
  rating:number;
  selectedHotel: Hotel;
  find(){
    if(this.WIFI){
    this.hotelconveniences.push("FREE_WIFI,")}
    if(this.parking){
    this.hotelconveniences.push("PARKING,")}
    if(this.SPA){
      this.hotelconveniences.push("SPA,")
    }
    if(this.RESEPTION){
      this.hotelconveniences.push("RECEPTION_24_HOUR,")
    }
    if(this.FITNESSCENTER){
      this.hotelconveniences.push("FITNESS_CENTER,")
    }
    if(this.SWIMMINGPOLL){
      this.hotelconveniences.push("SWIMMING_POOL,")
    }
    let body = {city:this.city,rating:this.rating,hotelConveniences:this.hotelconveniences}
    this.posts = this.http.post<Hotel[]>(this.ROOT_URL,body);
  }
  getPosts() {
    this.spinnerService.show();

    let body = this.service.hotelFilter;

    let options = {
     body:body
    };
    this.posts = this.http.post<Hotel[]>(this.ROOT_URL,body);
    this.spinnerService.hide();
  }
  onSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.router.navigate(['/SearchResult', hotel.hotelId]);
    console.log(hotel.hotelId);

  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }
}
