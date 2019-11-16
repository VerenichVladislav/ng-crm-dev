

export class Trips {
  id: number;
  departureCity: string;
  DepartureTime: string;
  arrivalCity: string;
  arrivalTime: string;


  // tslint:disable-next-line:no-shadowed-variable
  constructor(Trips: Trips) {
    this.id = Trips.id;
    this.departureCity = Trips.departureCity;
    this.DepartureTime = Trips.DepartureTime;
    this.arrivalCity = Trips.arrivalCity;
    this.arrivalTime = Trips.arrivalTime;
  }
}
