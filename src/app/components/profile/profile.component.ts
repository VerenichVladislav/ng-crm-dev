import {Component, DoCheck, Input, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';
import {Trip} from '../../entity/trip';
import {Ticket} from '../../entity/ticket';
import {Reservation} from '../../entity/reservation';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private user: User;
  private reservations: Reservation[] = [];
  private tours;
  private tickets: Ticket[] = [];
  constructor(private transfer: DataTransferService,
              private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.transfer.tickets$.getValue() !== undefined) {
          this.transfer.tickets$.subscribe( value => {
            this.tickets = value;
            if (this.tickets.length > 0) {
              localStorage.setItem('tickets', JSON.stringify(this.tickets));
            }
          });
        } else {
          this.tickets = JSON.parse(localStorage.getItem('tickets'));
        }

        if (this.transfer.reservations$.getValue() !== undefined) {
          this.transfer.reservations$.subscribe(value => {
            this.reservations = value;
            if (this.reservations.length > 0) {
              localStorage.setItem('reservations', JSON.stringify(this.reservations));
            }
          });
        } else {
          this.reservations = JSON.parse(localStorage.getItem('reservations'));
        }
      });
  }


  isLater(date: string): boolean {
    return new Date(date) > new Date();
  }


}
