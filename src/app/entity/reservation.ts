import {City} from './city';
import {Observable} from 'rxjs';
import {room} from './room';
import {Hotel} from './hotel';

export class Reservation {
  reservationId: number;
  checkIn: string;
  checkOut: string;
  hotel?: Hotel;

  constructor(reservResponse: any = {} as any) {
    let {
      hotel = new Hotel()
    } = reservResponse;

    this.reservationId = reservResponse.reservationId;
    this.checkIn = reservResponse.checkIn.replace('T', ' ').slice(0, reservResponse.checkIn.indexOf('.'));
    this.checkOut = reservResponse.checkOut.replace('T', ' ').slice(0, reservResponse.checkOut.indexOf('.'));;
    this.hotel = new Hotel({hotelId: hotel});
  }

  setHotel(hotel: Hotel) {
    this.hotel = hotel;
  }
}
