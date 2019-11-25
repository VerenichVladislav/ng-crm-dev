import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel} from 'src/app/entity/hotel';
import { Observable, Timestamp } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { room } from '../../entity/room';
import { element } from 'protractor';
import { Router } from '@angular/router';
import {GlobalRootURL} from '../../GlobalRootURL';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { Time } from '@angular/common';
import { isNgContent } from '@angular/compiler';
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
