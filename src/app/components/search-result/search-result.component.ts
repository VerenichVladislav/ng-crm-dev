import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel} from 'src/app/entity/hotel';
import { Observable } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { room } from '../../entity/room';
import { element } from 'protractor';
import { Router } from '@angular/router';
import {GlobalRootURL} from '../../GlobalRootURL';
@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
@Injectable()
export class SearchResultComponent implements OnInit {
@Input()

  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'hotels';
  posts: Observable<Hotel[]>;
  rooms: Observable<room[]>;
  ratingFilter: number;
  city:String;
  constructor(private http: HttpClient, private router: Router) {
    this.getPosts();
  }
  selectedHotel: Hotel;
  getPosts() {
    let body = {
      city:this.city,
      rating:this.ratingFilter
    };

    let options = {
      observe: <'body'>'response'
    };
    this.posts = this.http.post<Hotel[]>(this.ROOT_URL,options);
  }
  onSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.router.navigate(['/SearchResult', hotel.hotelId]);
    console.log(hotel.hotelId);

  }
  ngOnInit() {
  }
}
