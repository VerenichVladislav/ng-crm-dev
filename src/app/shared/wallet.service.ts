import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Wallet} from '../entity/wallet';
import { GlobalRootURL} from '../GlobalRootURL';
import { UserService } from './user.service';
import { User } from '../entity/user';
import { map } from 'rxjs/operators';
import { DataTransferService } from './data-transfer.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'wallets/';
  subscriptions: any;
  constructor(private http: HttpClient){ }

  getWalletById(id: number): Observable<Wallet>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<Wallet>(this.URL + id, options);
  }

  replenishWallet(sum:any, userId:number): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    console.log(JSON.stringify(this.URL+userId+'/sendConfirm?sum='+sum.value));
    return this.http.get<any>(this.URL+userId+'/sendConfirm?sum='+sum.value, options);
    }

  loadWallet(id: number): Observable<Wallet> {
    return this.getWalletById(id).pipe(
      map((wallet: Wallet) => {
          return new Wallet(wallet);
        }
      )
    );
  }
}
