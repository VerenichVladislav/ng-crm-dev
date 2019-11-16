import {Component, Injectable, Input, OnInit} from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {Trip} from '../../entity/trip';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs/operators';

export class Passanger {
  constructor(public name: string,
              public lastname: string) {}
}

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BuyTicketComponent implements OnInit {
  appTitle = 'Информация о рейсе';
  trip: Trip;
  count: number;

  passanger: Passanger = new Passanger('', '');
  passangers: Passanger[] = [];
  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  addPassenger() {
    this.passangers.push(new Passanger(this.passanger.name, this.passanger.lastname));
  }
  ngOnInit() {
    const tripid = this.route.snapshot.paramMap.get('tripid');
    const userid = this.route.snapshot.paramMap.get('userid');

    this.trip = this.tripService.getTrip(tripid).subscribe(
        data => this.trip = data
       );
    this.route.queryParams.subscribe(params => {
        this.count = params.count;
      });
  }
}
