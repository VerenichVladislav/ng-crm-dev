import { Injectable } from '@angular/core';
import {GlobalRootURL} from '../GlobalRootURL';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../entity/ticket';
import { User } from '../entity/user';
import { Wallet } from '../entity/wallet';
import { map } from 'rxjs/operators';
import { WalletService } from './wallet.service';
import { UserService } from './user.service';
import { DataTransferService } from './data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'tickets/buyer/';

  constructor(private http: HttpClient,
              private walletService: WalletService){ }

  getAllByBuyerId(id: number): Observable<Ticket[]>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //headers.set('Authorization', localStorage.getItem('auth_token'));
    let options = { headers: headers };
    return this.http.get<Ticket[]>(this.URL + id, options);
  }

  loadWallet(id: number): Observable<Wallet> {
    return this.walletService.getWalletById(id).pipe(
      map((wallet: Wallet) => {
          return new Wallet(wallet);
        }
      )
    );
  }

  submitForm(data: any, count: number, tripid: number, userid: number): Observable<any> {
    console.log(data);
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    return this.http.post<any>(GlobalRootURL.BASE_API_URL + 'trips/'+userid +'/'+tripid+'/buy?count='+count, data, options);
  }
}
