import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../search-result-component/hotel';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { error } from 'util';

@Component({
  selector: 'app-detailshotel-component',
  templateUrl: './detailshotel-component.component.html',
  styleUrls: ['./detailshotel-component.component.css']
})
export class DetailshotelComponentComponent implements OnInit {



  hotel:Hotel;
 
readonly ROOT_URL = 'http://localhost:8080/hotels';
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
