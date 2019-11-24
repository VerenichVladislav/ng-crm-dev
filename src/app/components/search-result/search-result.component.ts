import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel} from 'src/app/entity/hotel';
import { Observable } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { room } from '../../entity/room';
import { element } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import {GlobalRootURL} from '../../GlobalRootURL';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { HotelService } from 'src/app/shared/hotel.service';
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
  constructor(private http: HttpClient, private router: Router,private address :ActivatedRoute,private service:HotelService) {
    
    this.city = service.hotelFilter.city;
    console.log(this.city);
    
    this.getPosts();
  }
  selectedHotel: Hotel;
  getPosts() {
    let body = this.service.hotelFilter;

    let options = {
     body:body
    };
    this.posts = this.http.post<Hotel[]>(this.ROOT_URL,body);
  }
  onSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.router.navigate(['/SearchResult', hotel.hotelId]);
    console.log(hotel.hotelId);

  }
  ngOnInit() {
  }
}
