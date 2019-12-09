import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../entity/News';

import { GapiSession } from '../google-service/GapiSession';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.http.get<News>("https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-03&sortBy=publishedAt&apiKey=1e5a72d0fdc146f7a9b9727884df13ed")
    .subscribe(res=>this.posts=res);
  }
  sig(){
   
  }
  posts:News;
  ngOnInit() {

  }

}
