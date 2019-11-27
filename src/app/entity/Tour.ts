import { Timestamp, Observable } from 'rxjs';

export interface Tour{
    tourId:number;
    name:String;
    price:number;
    duration:number;
    city_destination:String;
    rating:number;
    hotel:number;
    cityId:number;
    company:number;
    date:Timestamp<Date>;
    comments:Observable<Comment[]>;
}