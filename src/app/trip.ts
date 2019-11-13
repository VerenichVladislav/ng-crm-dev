export class Trip {
  id: number;
  cityFrom: string;
  cityDest: string;
  price: number;
  fullCountSeats: number;
  transport: string;
  dateFrom: string;
  dateDest: string;


  constructor(realTrip: Trip) {
    this.price = realTrip.price;
  }
}
