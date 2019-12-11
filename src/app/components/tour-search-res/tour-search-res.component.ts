import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Tour } from '../../entity/Tour';
import { GlobalRootURL } from '../../GlobalRootURL';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from '../../shared/TourService';
import { MarkerComponent } from 'src/app/marker/marker.component';
import { City } from 'src/app/entity/city';
import { TourFilter } from 'src/app/entity/TourFilter';
import { Ticket } from 'src/app/entity/ticket';
import { Trip } from 'src/app/entity/trip';
import { TripFilters } from 'src/app/entity/TripFilters';

@Component({
  selector: 'app-tour-search-res',
  templateUrl: './tour-search-res.component.html',
  styleUrls: ['./tour-search-res.component.css']
})
@Injectable()
export class TourSearchResComponent implements OnInit {

  constructor(
     private http: HttpClient,
     private router:Router,
     private address :ActivatedRoute,
     private service:TourService)
      {
        this.CityResponse= this.http.get<City[]>(GlobalRootURL.BASE_API_URL+"cities")

       }
    currentCityMarker:any;
    ToCityMarker = [];
    currentCity:City;
    CityResponse:Observable<City[]>;
    TourResponse:Observable<Trip>;
    SelectTicket:Observable<Trip>;
    filter:TripFilters;
    @Input() city:string;
    map:any;
     mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
     MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
     
     createTout(){
      
      this.CityResponse.forEach(element => {
        var index:number = 1;
        var el = document.getElementById('marker');
          
        element.forEach(ele=>{
          
          
         
         this.CityResponse.forEach(element => {
           console.log(ele.lng);
           var item =  el.cloneNode(true);
           
           item.addEventListener("click", ()=>this.NewPoint(ele.cityId))
           var marker = new this.mapboxgl.Marker(item)
           .setLngLat([ele.lng,ele.lat])
             .addTo(this.map);
             this.ToCityMarker.push(marker);
             
             
        })
      
      })
    })
      
     }
     
     NewPoint(id:number){
       alert(id);
       
     }
     LoadTrip(filter:TripFilters)
     {

     }
     addMarkerTrip(){

     }
    ngOnInit() {
     
    this.mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    this.map = new this.mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/chupers/ck3n2w1mv1sbc1cpaqf1vbkof',
    });
    var geocoder = new this.MapboxGeocoder({
      accessToken:this.mapboxgl.accessToken,
      mapboxgl: this.mapboxgl
      });
  }
  fn(){
  
  
  
 
  }

}
