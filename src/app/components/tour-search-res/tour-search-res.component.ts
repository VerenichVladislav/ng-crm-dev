<<<<<<< HEAD:src/app/tour-search-res/tour-search-res.component.ts
import { Component, OnInit, Injectable } from '@angular/core';
import { Tour } from '../entity/Tour';
import { GlobalRootURL } from '../GlobalRootURL';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from '../shared/TourService';
@Injectable()
=======
import { Component, OnInit } from '@angular/core';
import { Tour } from '../../entity/Tour';
import { GlobalRootURL } from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from '../../shared/TourService';

>>>>>>> ce9e9715eadfbeadd81895bfe58296e1b384e68d:src/app/components/tour-search-res/tour-search-res.component.ts
@Component({
  selector: 'app-tour-search-res',
  templateUrl: './tour-search-res.component.html',
  styleUrls: ['./tour-search-res.component.css']
})
export class TourSearchResComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router,private address :ActivatedRoute,private service:TourService) { }
  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'tours';
  posts: Observable<Tour[]>;

  ngOnInit() {
    this.getPosts();
  }
  selectedTour: Tour;
  getPosts() {
    let body = this.service.TourFilter;

    let options = {
     body:body
    };
    this.posts = this.http.post<Tour[]>(this.ROOT_URL,body);

  }
  onSelect(Tour: Tour): void {
    this.selectedTour = Tour;
    this.router.navigate(['tourResult/', Tour.tourId]);
    console.log(Tour.tourId);

  }

}
