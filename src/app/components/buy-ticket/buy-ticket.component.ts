import {Component, Injectable, Input, OnInit} from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {Trip} from '../../entity/trip';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';


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

  ticketForm: FormGroup;
  passengers: FormArray;

  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder){
    this.ticketForm = formBuilder.group({

      passengers: this.formBuilder.array([ this.createPsg() ])
    });
  }

  createPsg(): FormGroup {
    return this.formBuilder.group({
      name: '',
      lastName: ''
    });
  }
  addPsg(): void {
    this.passengers = this.ticketForm.get('passengers') as FormArray;
    this.passengers.push(this.createPsg());
  }
  submit(){
    console.log(this.ticketForm);
  }

    ngOnInit() {
    const tripid = this.route.snapshot.paramMap.get('tripid');
    const userid = this.route.snapshot.paramMap.get('userid');

    this.trip = this.tripService.getTrip(tripid).subscribe(
        data => this.trip = data
       );
    this.route.queryParams.subscribe(params => {
        this.count = parseInt(params.count);
        console.log(this.count);
      });
    this.ticketForm = this.formBuilder.group({
        passengers: this.formBuilder.array([ this.createPsg() ])
      });
    console.log(this.passengers);
  }
}
