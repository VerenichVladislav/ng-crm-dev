import {City} from './city';

export class Ticket {
  firstName: string;
  lastName: string;
  date: string;
  tripId: number;
  cityDest: City;
  cityFrom: City;
  price: number;
  constructor(ticket: Ticket) {
    this.firstName = ticket.firstName;
    this.lastName = ticket.lastName;

    this.tripId = ticket.tripId;
    this.price = ticket.price;

    this.date = ticket.date.replace('T', ' ').slice(0, ticket.date.indexOf('.'));
  }
}
