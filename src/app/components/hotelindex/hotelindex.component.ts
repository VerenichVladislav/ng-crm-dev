import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { HotelService } from 'src/app/shared/hotel.service';

@Component({
  selector: 'app-hotelindex',
  templateUrl: './hotelindex.component.html',
  styleUrls: ['./hotelindex.component.css']
})
@Injectable()
export class HotelindexComponent implements OnInit {

  constructor(private router: Router,public service:HotelService) {

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
  ngOnInit() {
  }

}
