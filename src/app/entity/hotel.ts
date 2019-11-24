import { room} from 'src/app/entity/room'
import { Observable } from 'rxjs';

import {City} from './city';
export class Hotel{
  hotelId: number;
  country: string;
  address: string;
  rating: number;
  hotelName:string;
  phoneNumber:string;
  rooms:Observable<room[]>;
  comments:Array<any>;
  city: City;

  constructor(hotelResponse: any) {
    this.hotelId = hotelResponse.hotelId;
    this.country = hotelResponse.country;
    this.address = hotelResponse.address;
    this.rating = hotelResponse.rating;
    this.hotelName = hotelResponse.hotelName;
    this.phoneNumber = hotelResponse.phoneNumber;
    this.rooms = hotelResponse.rooms;
    this.comments = hotelResponse.comments;
    this.city = hotelResponse.city;
  }
}