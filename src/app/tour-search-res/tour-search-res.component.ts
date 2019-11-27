import { Component, OnInit } from '@angular/core';
import { Tour } from '../entity/Tour';
import { GlobalRootURL } from '../GlobalRootURL';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from '../shared/TourService';

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
