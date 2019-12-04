import {City} from './city';

export class Ticket {
  firstName: string;
  lastName: string;
  date: string;
  tripId: number;
  cityDest?: City;
  cityFrom?: City;
  price: number;
  constructor(ticket: any = {} as any) {
    let {
      cityFrom = new City(),
      cityDest = new City()
    } = ticket;

    this.firstName = ticket.firstName;
    this.lastName = ticket.lastName;
    this.cityFrom = new City({cityId: cityFrom});
    this.cityDest = new City({cityId: cityDest});
    this.tripId = ticket.tripId;
    this.price = ticket.price;

    this.date = ticket.date.replace('T', ' ').slice(0, ticket.date.indexOf('.'));
  }

  setCityFrom(city: City) {
    this.cityFrom = city;
  }

  setCityDest(city: City) {
    this.cityDest = city;
  }
}
