import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-map',
  templateUrl: './ticket-map.component.html',
  styleUrls: ['./ticket-map.component.css']
})
export class TicketMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
    
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/chupers/ck3n2w1mv1sbc1cpaqf1vbkof',
    });
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      });
      
      
  //   this.posts.forEach(element => {
  //     element.forEach(hotel => {
  //       console.log(hotel.lng);
       
  //     var marker = new mapboxgl.Marker()
  //     .setLngLat([hotel.lat,hotel.lng])
  //     .setPopup(new mapboxgl.Popup({ offset: 15 }) // add popups
  //   .setHTML("<mat-card><mat-card-header><mat-card-title><a href='SearchResult/"+hotel.hotelId+"'>"+hotel.hotelName+"<mat-card-title></mat-card-header><image style=' max-width: 150px;overflow: hidden;' src='https://drive.google.com/uc?export=view&id="+hotel.image+"'><mat-card-actions><button (click)='select()' style='border-radius: 3px;border: 2px solid #17bed2;background: #fff;color: #17bed2;'>Select</button></mat-card-actions></mat-card></a>"))
  //     .addTo(map);
        
  //     });
      
  //  });
    
    
  
  }

}
