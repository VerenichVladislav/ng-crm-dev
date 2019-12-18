

export class Trip {
    tripId: number;
    cityFrom: number;
    cityDest: number;
    price: string;
    fullCountSeats: string;
    transport: string;
    dateFrom: string;
    dateDest: string;
    count:number;


  constructor(trip:any) {
    this.tripId = trip.tripId;
    this.cityFrom = trip.cityFrom;
    this.cityDest = trip.cityDest;
    this.price = trip.price;
    this.fullCountSeats = trip.fullCountSeats;
    this.transport = trip.transport;
    this.dateFrom = trip.dateFrom;
    this.dateDest = trip.dateDest;
  }
  
}
