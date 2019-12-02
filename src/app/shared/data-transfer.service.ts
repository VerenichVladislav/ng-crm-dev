import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ticket} from '../entity/ticket';
import {Reservation} from '../entity/reservation';
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private tickets: Ticket[];
  private reservations: Reservation[];
  private user: User;

  tickets$ = new BehaviorSubject<Ticket[]>(this.tickets);
  reservations$ = new BehaviorSubject<Reservation[]>(this.reservations);
  user$ = new BehaviorSubject<User>(this.user);
  constructor() { }

  setTickets(data: Ticket[]) {
    this.tickets$.next(data);
  }

  setReservations(data: Reservation[]) {
    this.reservations$.next(data);
  }

  setUser(data: User) {
    this.user$.next(data);
  }
}
