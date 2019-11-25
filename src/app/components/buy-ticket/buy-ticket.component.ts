import {Component, Injectable, Input, OnInit} from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {Trip} from '../../entity/trip';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TicketService} from '../../shared/ticket.service';
import { parseHttpResponse } from 'selenium-webdriver/http';
import {SnackBarComponent} from '../snack-bar/snack-bar.component';
@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BuyTicketComponent implements OnInit {
  appTitle = 'Flight Information';
  trip: Trip;
  count: number;
  public usersForm: FormGroup;
  error: HttpErrorResponse;
  idT:number;
  idU:number;
  message: any;
  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private ticketService: TicketService,
              private errorConnection: SnackBarComponent,
              private http: HttpClient){}

    ngOnInit() {
    const tripid = this.route.snapshot.paramMap.get('tripid');
    this.idT = parseInt(tripid);
    const userid = this.route.snapshot.paramMap.get('userid');
    this.idU = parseInt(userid);
    this.trip = this.tripService.getTrip(tripid).subscribe(
      data => this.trip = data
     );


    this.route.queryParams.subscribe(params => {
        this.count = parseInt(params.count);
      });

    this.usersForm = this.fb.group({
      users: this.fb.array([
        this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required]
        })
      ])
    })
    this.addFormControl();
    this.usersForm.valueChanges.subscribe((value)=>console.log(value));
  }

  removeFormControl(i) {
    let usersArray = this.usersForm.controls.users as FormArray;
    usersArray.removeAt(i);
  }

  addFormControl() {
    for (let i = 1; i < this.count; i++) {
      let usersArray = this.usersForm.controls.users as FormArray;
      let arraylen = usersArray.length;
      let newUsergroup: FormGroup = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      })
      usersArray.insert(arraylen, newUsergroup);
    }
  }

  submit(){
    this.ticketService.submitForm(this.usersForm.controls.users.value, this.count, this.idT, this.idU)
                .subscribe(
                    (log: HttpErrorResponse) => {
                        this.message = log;
                    },
                    (error) => {
                      this.message = error.error;
                      if(error.status === 0) {
                        this.errorConnection.openSnackBar();
                      }
                    }
                );
  }
 }

