import {Component, DoCheck, Input, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';
import {Trip} from '../../entity/trip';
import {Ticket} from '../../entity/ticket';
import {Reservation} from '../../entity/reservation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements DoCheck{
  private user: User;
  private reservations: Reservation[];
  private tours;
  private tickets: Ticket[];
  constructor(private transfer: DataTransferService) {}

  ngDoCheck() {
    if(localStorage.getItem('auth_token') === null) {
      this.user = null;
      this.tickets = null;
      this.reservations = null;
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.tickets = JSON.parse(localStorage.getItem('tickets'));
      this.reservations = JSON.parse(localStorage.getItem('reservations'));
    }

    if(this.transfer.tickets$.value !== undefined){
      this.transfer.tickets$.subscribe( value => {
        this.tickets = value;
        localStorage.setItem('tickets', JSON.stringify(this.tickets));
      });
    }

    if(this.transfer.reservations$.value !== undefined){
      this.transfer.reservations$.subscribe( value => {
        this.reservations = value;
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
      });
    }
  }

  isLater(date: string): boolean{
    return new Date(date) > new Date();
  }


}
