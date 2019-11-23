import {City} from './city';
import {Observable} from 'rxjs';
import {room} from './room';
import {Hotel} from './hotel';

export class Reservation {
  reservationId: number;
  checkIn: string;
  checkOut: string;
  hotel: Hotel;

  constructor(reservResponse: any) {
    this.reservationId = reservResponse.reservationId;
    this.checkIn = reservResponse.checkIn;
    this.checkOut = reservResponse.checkOut;
    this.hotel = reservResponse.hotel;
  }
}
