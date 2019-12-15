import { Component, OnInit, Input, Injectable } from '@angular/core';
import { TripFilters } from 'src/app/entity/TripFilters';
import { TripService } from 'src/app/shared/trip.service';
import {Router} from '@angular/router'
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-flightsindex',
  templateUrl: './flightsindex.component.html',
  styleUrls: ['./flightsindex.component.css'],
  providers: [DatePipe],
})
@Injectable()
export class FlightsindexComponent implements OnInit {

  constructor(private router: Router,
    public service: TripService,
    public datePipe: DatePipe) { }
  @Input() status:boolean;
  @Input() cityFrom:string;
  @Input() cityDest:string;
  mindate = new Date();
  @Input() dateFrom:Timestamp<Date>;
  tripFilter: TripFilters;
  isChat:boolean = false;

  find(){
      this.tripFilter = {
      cityDest:this.cityDest,
      cityFrom:this.cityFrom,
      dateFrom:this.datePipe.transform(this.dateFrom, 'yyyy-MM-dd')
    }
    this.service.setTripFilter(this.tripFilter);
   this.router.navigate(['/SearchResultTrip']);
  }
 

  ngOnInit() {
  }
  chat(){
  this.router.navigate(['/chat']);
  }

}
