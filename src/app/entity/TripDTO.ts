export class TripDTO {
    tripId: number;
    cityFrom: string;
    cityDest: string;
    price: string;
    fullCountSeats: number;
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