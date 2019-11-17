import {Component, DoCheck, Input, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';
import {Trip} from '../../entity/trip';
import {Ticket} from '../../entity/ticket';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements DoCheck{
  private user: User;
  private trips: Trip[];
  private tickets: Ticket[];
  constructor(private transferService: DataTransferService<Ticket[]>) {}


  ngDoCheck() {
    if(localStorage.getItem('auth_token') === null) {
      this.user = null;
      this.trips = null;
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.trips = JSON.parse(localStorage.getItem('trips'));
    }
    this.transferService.data$.subscribe( value => {
        this.tickets = value;
    });
  }
}
