import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Tour } from '../../entity/Tour';
import { GlobalRootURL } from '../../GlobalRootURL';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'tours';
  constructor(private route:ActivatedRoute,private http:HttpClient,public dialog:MatDialog) { }
  tourId:number;
  tour:Tour;
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tourId = id;
    this.http.get<Tour>(this.ROOT_URL+"/"+id).subscribe(
     (data: Tour) => {
       this.tour = data;
       },
     error => {
       console.log(error)
     }
   )
  }

}
