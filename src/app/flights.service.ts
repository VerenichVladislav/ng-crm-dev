import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFlights} from './flights';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class FlightsService {

  // tslint:disable-next-line:variable-name
  private _url: string = '/assets/data/package.json';
  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get<IFlights[ ]>(this._url);
  }
}
