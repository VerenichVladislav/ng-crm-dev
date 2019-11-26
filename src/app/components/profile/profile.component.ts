import {Component, DoCheck, Input, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';
import {Trip} from '../../entity/trip';
import {Ticket} from '../../entity/ticket';
import {Reservation} from '../../entity/reservation';
import {NavigationEnd, NavigationStart, RouteConfigLoadEnd, Router, RoutesRecognized} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private user: User;
  private reservations: Reservation[];
  private tours;
  private tickets: Ticket[];
  constructor(private transfer: DataTransferService,
              private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {

        this.user = JSON.parse(localStorage.getItem('user'));
        //this.transfer.tickets$.value.length !== 0
        if(this.transfer.tickets$.value !== undefined ){
          this.transfer.tickets$.subscribe( value => {
            this.tickets = value;
            localStorage.setItem('tickets', JSON.stringify(this.tickets));
          });
        } else {
          this.tickets = JSON.parse(localStorage.getItem('tickets'));
        }

        // this.transfer.reservations$.value.length !== 0
        if(this.transfer.reservations$.value !== undefined ){
          this.transfer.reservations$.subscribe( value => {
            this.reservations = value;
            localStorage.setItem('reservations', JSON.stringify(this.reservations));
          });
        } else {
          this.reservations = JSON.parse(localStorage.getItem('reservations'));
        }
      });
  }


  isLater(date: string): boolean{
    return new Date(date) > new Date();
  }


}
