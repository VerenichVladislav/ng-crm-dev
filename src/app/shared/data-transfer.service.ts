import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Ticket} from '../entity/ticket';
import {Reservation} from '../entity/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private tickets: Ticket[];
  private reservations: Reservation[];

  tickets$ = new BehaviorSubject<Ticket[]>(this.tickets);
  reservations$ = new BehaviorSubject<Reservation[]>(this.reservations);
  constructor() { }

  setTickets(data: Ticket[]) {
    this.tickets$.next(data)
  }

  setReservations(data: Reservation[]) {
    this.reservations$.next(data)
  }
}
