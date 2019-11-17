import {City} from './city';

export class Ticket {
  name: string;
  lastName: string;
  date: string;
  tripId: number;
  cityDest: City;
  cityFrom: City;
  price: number;
  constructor(ticket: Ticket) {
    this.name = ticket.name;
    this.lastName = ticket.lastName;
    this.date = ticket.date;
    this.tripId = ticket.tripId;
    this.price = ticket.price;
  }
}
