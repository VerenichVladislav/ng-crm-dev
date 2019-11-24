import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  readonly ROOT_URL = 'http://localhost:8080/trips/';
  constructor(private activateRoute: ActivatedRoute, private router: Router, private http: HttpClient) {}

  getTrip(id): any {
    return this.http.get(this.ROOT_URL + id);
  }
}

