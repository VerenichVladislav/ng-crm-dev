import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel} from 'src/app/search-result-component/hotel';
import { Observable } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { room } from './room';
import { element } from 'protractor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})
@Injectable()
export class SearchResultComponentComponent implements OnInit {
@Input()

  readonly ROOT_URL = 'http://localhost:8080/hotels';
  posts: Observable<Hotel[]>;
  rooms: Observable<room[]>;
  constructor(private http: HttpClient, private router: Router) {
    this.getPosts();
  }
  selectedHotel: Hotel;
  getPosts() {
    this.posts = this.http.get<Hotel[]>(this.ROOT_URL);
  }
  onSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.router.navigate(['/SearchResult', hotel.hotelId]);
    console.log(hotel.hotelId);

  }
  ngOnInit() {
  }
}
