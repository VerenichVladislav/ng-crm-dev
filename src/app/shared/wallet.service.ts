import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from '../entity/wallet';
import {GlobalRootURL} from '../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private URL = GlobalRootURL.BASE_API_URL + 'wallets/';
  constructor(private http: HttpClient){ }

  getWalletById(id: number): Observable<Wallet>{
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };

    return this.http.get<Wallet>(this.URL + id, options);
  }
}
