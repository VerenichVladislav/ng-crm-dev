import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../../entity/hotel';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { error } from 'util';
import {GlobalRootURL} from '../../GlobalRootURL';

@Component({
  selector: 'app-detailshotel-component',
  templateUrl: './detailshotel.component.html',
  styleUrls: ['./detailshotel.component.css']
})
export class DetailshotelComponent implements OnInit {
  hotel:Hotel;

readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'hotels';
  constructor(private route:ActivatedRoute,private http:HttpClient) { }
  hotelid:number;
  getInfo:Observable<Hotel>;
  realHOtel: Hotel;
  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.hotelid = id;


     this.http.get<Hotel>(this.ROOT_URL+"/"+id).subscribe(
     (data: Hotel) => {
       this.realHOtel = data;
     },
     error => {
       console.log(error)
     }
   )


  }







}
