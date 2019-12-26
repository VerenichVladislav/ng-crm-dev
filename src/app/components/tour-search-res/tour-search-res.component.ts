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
import { TripDTO } from 'src/app/entity/TripDTO';
import { element } from 'protractor';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { TourDialogComponent } from 'src/app/tour-dialog/tour-dialog.component';
import { MatDialog } from '@angular/material';

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
     private service:TourService,
     public dialog: MatDialog)
      {
        this.CityResponse= this.http.get<City[]>(GlobalRootURL.BASE_API_URL+"cities")

       }
       readonly URL = GlobalRootURL.BASE_API_URL + 'trips';
    currentCityMarker:any;
    ToCityMarker = [];
    StartCity:string;
    currentCity:String;
    CityResponse:Observable<City[]>;
    TripChoise:TripDTO[] = [];
    TourResponse:TripDTO[] = [];
    @Input() dateFrom:Timestamp<Date>;
    mindate = new Date();
    filter:TripFilters;
    @Input() city:string;
    map:any;
     mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
     MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
    
     
     createTout(){
      this.TripChoise = [];
       this.StartCity = null;
      this.CityResponse.forEach(element => {
        element.forEach(ele=>{
          var el = document.getElementById('marker');
           var item =  el.cloneNode(true);  
           item.addEventListener("click", ()=>this.NewPoint(ele.cityName))
           var marker = new this.mapboxgl.Marker(item)
           .setLngLat([ele.lng,ele.lat])
             .addTo(this.map);
             this.ToCityMarker.push(marker);    
      })
    })
     }
     NewPoint(cityName:string){
      
        if(this.StartCity == undefined){
          this.StartCity = cityName;      
        }
        else{
          var ToDisplayFilter:TripFilters ={
            cityFrom:this.currentCity,
            cityDest:cityName,
            dateFrom:null
          }
          this.AddTrip(ToDisplayFilter);
          
        }
        this.currentCity = cityName;
        for (var i = this.ToCityMarker.length - 1; i >= 0; i--) {
          this.ToCityMarker[i].remove();}
   
    this.ToCityMarker = [];
       var filter:TripFilters ={
         cityFrom:cityName,
         cityDest:null,
         dateFrom:null
       }
        this.LoadTrip(filter)
     }
     LoadTrip(filter:TripFilters)
     {
      
      let body = filter;
      let options = {
       body:body
      };
      this.http.post<TripDTO[]>(this.URL + "/dto",body).subscribe(item=>{
       
        var checkCity:string[] = [];
      this.TourResponse = item;
      this.CityResponse.forEach(element => {
        var marker;
        element.forEach(ele=>{
          
          this.TourResponse.forEach(tour=>{      
          if(tour.cityDest==ele.cityName)
          {            
          var el = document.getElementById('marker');
           var item =  el.cloneNode(true);  
           item.addEventListener("click", ()=>this.NewPoint(ele.cityName))
            marker = new this.mapboxgl.Marker(item)
           .setLngLat([ele.lng,ele.lat])
             .addTo(this.map);
             this.ToCityMarker.push(marker);
             checkCity.push(tour.cityDest);
          }
          })  
      })
    })})
     }
     TRIP:Observable<TripDTO[]>
     AddTrip(filter:TripFilters){
      let body = filter;
      let options = {
       body:body
      };
      this.TRIP= this.http.post<TripDTO[]>(this.URL + "/dto",body)
      this.TRIP.forEach(item=>{
    
        item.forEach(i=>{
          
          
          this.TripChoise.push(i);
        })
      
      })
     }
     Buy(){
        this.dialog.open(TourDialogComponent, {
         data:{TripChoise:this.TripChoise}
       });
     
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
}
