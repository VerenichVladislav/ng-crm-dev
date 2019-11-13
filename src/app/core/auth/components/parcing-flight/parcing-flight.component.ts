import { Component, OnInit } from '@angular/core';
import {FlightsService} from '../../../../flights.service';

@Component({
  selector: 'app-parcing-flight',
  templateUrl: './parcing-flight.component.html',
  styleUrls: ['./parcing-flight.component.css']
})
export class ParcingFlightComponent implements OnInit {

  public flights = [];

  // tslint:disable-next-line:variable-name
   constructor(private _flightsService: FlightsService) { }

  ngOnInit() {
    this._flightsService.getFlights()
      .subscribe(data => this.flights = data);
  }

}
