import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Trips} from './trips';

@Component({
  selector: 'app-search-result-trip',
  templateUrl: './search-result-trip.component.html',
  styleUrls: ['./search-result-trip.component.css']
})
@Injectable()
export class SearchResultTripComponent implements OnInit {
  @Input()

  readonly ROOT_URL = 'http://localhost:8080/trips';
  posts: Observable<Trips[]>;
  // rooms: Observable<room[]>;
  constructor(private http: HttpClient, private router: Router) {
    this.getPosts();
  }
  selectedTrip: Trips;
  getPosts() {
    this.posts = this.http.get<Trips[]>(this.ROOT_URL);
  }
  onSelect(trips: Trips): void {
    this.selectedTrip = trips;
    this.router.navigate(['/SearchResult', trips.id]);
    console.log(trips.id);

  }
  ngOnInit() {
  }
}


