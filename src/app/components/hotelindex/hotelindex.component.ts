import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { HotelService } from 'src/app/shared/hotel.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from 'src/app/entity/city';
import { GlobalRootURL } from 'src/app/GlobalRootURL';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-hotelindex',
  templateUrl: './hotelindex.component.html',
  styleUrls: ['./hotelindex.component.css']
})
@Injectable()
export class HotelindexComponent implements OnInit {

  constructor(private router: Router,
              public service:HotelService,
              private http:HttpClient,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
    this.cityCollection = this.http.get<City>(GlobalRootURL.BASE_API_URL+"cities");
    this.spinnerService.hide();
  }
  @Input() status:boolean;
  @Input() checkIn:string
  @Input() checkOut:string
  @Input() city:String;
  find(){
      var hotelFilter:HotelFilters = {
    city:this.city,
    CheckIn:this.checkIn,
    CheckOut:this.checkOut
   }



   this.service.setHotelFilter(hotelFilter);
   this.router.navigate(['/SearchResult']);
  }
  GoMap(){
    var filter = {} as HotelFilters
    this.service.setHotelFilter(filter);
 this.router.navigate(['/Mapfind']);
}
  findbyCity(city:string){
    console.log(city);
   this.city = city;


    this.find();
  }
  cityCollection:Observable<City>
  ngOnInit() {

  }

}
