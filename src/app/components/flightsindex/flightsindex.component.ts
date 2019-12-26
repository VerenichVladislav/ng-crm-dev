import { Component, OnInit, Input, Injectable } from '@angular/core';
import { TripFilters } from 'src/app/entity/TripFilters';
import { TripService } from 'src/app/shared/trip.service';
import {Router} from '@angular/router'
import {GlobalRootURL} from '../../GlobalRootURL';
import { HttpClient } from '@angular/common/http';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { City } from 'src/app/entity/city';

@Component({
  selector: 'app-flightsindex',
  templateUrl: './flightsindex.component.html',
  styleUrls: ['./flightsindex.component.css'],
  providers: [DatePipe],
})
@Injectable()
export class FlightsindexComponent implements OnInit {
  cityCollection:Observable<City>;
  constructor(private router: Router,
    public service: TripService,
    private http: HttpClient,
    public datePipe: DatePipe) {
      this.cityCollection = this.http.get<City>(GlobalRootURL.BASE_API_URL+"cities"); 
    }
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
}
