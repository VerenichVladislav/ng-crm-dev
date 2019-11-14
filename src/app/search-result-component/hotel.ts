import { room} from 'src/app/search-result-component/room'
import { Observable } from 'rxjs';
export interface Hotel{
    hotelId:number;
    country: string;
    address: string;
    rating: number;
    hotelName:string;
    phoneNumber:string;
    rooms:Observable<room[]>;
    comments:Array<any>;
    city:string;    
}