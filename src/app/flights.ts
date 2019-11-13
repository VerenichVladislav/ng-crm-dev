export class IFlights {
  id: number;
  departureCity: string;
  DepartureTime: string;
  arrivalCity: string;
  arrivalTime: string;


  constructor(flights: IFlights) {
    this.id = flights.id;
    this.departureCity = flights.departureCity;
    this.DepartureTime = flights.DepartureTime;
    this.arrivalCity = flights.arrivalCity;
    this.arrivalTime = flights.arrivalTime;
  }
}
