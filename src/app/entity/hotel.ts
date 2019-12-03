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
  city?: City;
  image:string;
  lat:number;
  lng:number;
  commentRating:number;

  constructor(hotelResponse: any = {} as any) {
    let {
      hotelId = -1,
      city = new City()
    } = hotelResponse;

    this.hotelId = hotelId;
    this.country = hotelResponse.country;
    this.address = hotelResponse.address;
    this.rating = hotelResponse.rating;
    this.hotelName = hotelResponse.hotelName;
    this.phoneNumber = hotelResponse.phoneNumber;
    this.rooms = hotelResponse.rooms;
    this.comments = hotelResponse.comments;
    this.city = hotelResponse.city;
    this.image =hotelResponse.image;
    this.lat = hotelResponse.lat;
    this.lng = hotelResponse.lng;
    this.city = city;
    this.image = hotelResponse.image;
    this.commentRating = hotelResponse.commentRating;
  }
}
