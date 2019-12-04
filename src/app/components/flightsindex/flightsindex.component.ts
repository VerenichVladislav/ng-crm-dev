import { Component, OnInit, Input } from '@angular/core';
import { TripFilters } from 'src/app/entity/TripFilters';
import { TripService } from 'src/app/shared/trip.service';
import {Router} from '@angular/router'
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-flightsindex',
  templateUrl: './flightsindex.component.html',
  styleUrls: ['./flightsindex.component.css']
})
export class FlightsindexComponent implements OnInit {
 

  constructor(private router: Router,
    public service: TripService) { }
  @Input() status:boolean;
  @Input() cityFrom:string;
  @Input() cityDest:string;
  @Input() dateFrom:string;
  

  find(){
    var tripFilter: TripFilters = {
      cityDest:this.cityDest,
      cityFrom:this.cityFrom,
      dateFrom:this.dateFrom
    }


   this.service.setTripFilter(tripFilter);
   this.router.navigate(['/SearchResultTrip']);
  }

  ngOnInit() {
  }

}
