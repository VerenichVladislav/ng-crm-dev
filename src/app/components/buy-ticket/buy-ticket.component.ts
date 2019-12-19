
import {Component, Injectable, Input, OnInit} from '@angular/core';
import {TripService} from '../../shared/trip.service';
import {Trip} from '../../entity/trip';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TicketService} from '../../shared/ticket.service';
import { parseHttpResponse } from 'selenium-webdriver/http';
import {SnackBarComponent} from '../snack-bar/snack-bar.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalRootURL } from 'src/app/GlobalRootURL';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BuyTicketComponent implements OnInit {
  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'trips/';
  appTitle = 'Flight Information';
  trip: Trip
  count: number;
  public usersForm: FormGroup;
  error: HttpErrorResponse;
  idT:number;
  idU:number;
  message: any;
  cityFrom:any;
  cityDest:any;
  transport:any;
  userId:number = JSON.parse(localStorage.getItem('user')).userId;
  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private ticketService: TicketService,
              private errorConnection: SnackBarComponent,
              private spinnerService: Ng4LoadingSpinnerService,
              private http: HttpClient){}

    ngOnInit() {
    this.spinnerService.show();
    const tripid = this.route.snapshot.paramMap.get('tripid');
    this.idT = parseInt(tripid);
    this.http.get<Trip>(this.ROOT_URL+ this.idT).subscribe((data: Trip) => {
      this.trip = new Trip(data);
      this.tripService.getCityName(data.cityFrom).subscribe(
        (log: HttpErrorResponse) => {
          this.cityFrom = log;
          }
        );;
      this.tripService.getCityName(data.cityDest).subscribe(
         (log: HttpErrorResponse) => {
           this.cityDest = log;
          }
        );
      this.tripService.getTransportName(data.transport).subscribe(
          (log: HttpErrorResponse) => {
            this.transport = log;
           }
         );
    });
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
    //this.usersForm.valueChanges.subscribe((value)=>console.log(value));
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
    this.ticketService.submitForm(this.usersForm.controls.users.value, this.count, this.idT, this.userId)
                .subscribe(
                    (log: HttpErrorResponse) => {
                    },
                    (error) => {
                      console.log(error);
                      if(error.status === 200) {
                        this.message = error.error.text;
                      }
                      if(error.status === 400) {
                        this.message = error.error;
                      }
                      //this.message = error.error;
                      if(error.status === 0) {
                        this.errorConnection.openSnackBar();
                      }
                    }
                );
  }
 }
