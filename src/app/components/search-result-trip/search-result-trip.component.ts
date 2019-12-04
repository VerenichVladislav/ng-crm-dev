import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/shared/trip.service';
import {GlobalRootURL} from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/entity/trip';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
``
@Component({
  selector: 'app-search-result-trip-component',
  templateUrl: './search-result-trip.component.html',
  styleUrls: ['./search-result-trip.component.css']
})
export class SearchResultTripComponent implements OnInit {
  readonly URL = GlobalRootURL.BASE_API_URL + 'trips';
  posts:Observable<Trip[]>;

  constructor(public service: TripService,
    private http: HttpClient,
    private router: Router) 
    {
      this.getPosts();
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

}
