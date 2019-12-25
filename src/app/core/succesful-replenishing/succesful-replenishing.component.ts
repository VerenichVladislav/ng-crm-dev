import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalRootURL } from 'src/app/GlobalRootURL';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User } from 'src/app/entity/user';
import { Wallet } from 'src/app/entity/wallet';
import { map } from 'rxjs/operators';
import { WalletService } from 'src/app/shared/wallet.service';
import { UserService } from 'src/app/shared/user.service';
import { DataTransferService } from 'src/app/shared/data-transfer.service';
import {LocaleStorageService} from "../../shared/locale-storage.service";

@Component({
  selector: 'app-succesful-replenishing',
  templateUrl: './succesful-replenishing.component.html',
  styleUrls: ['./succesful-replenishing.component.css']
})
export class SuccesfulReplenishingComponent implements OnInit {
  message: any;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private walletService: WalletService,
              private userService: UserService,
              private transfer: DataTransferService,
              private router: Router) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    const confirmCache = this.route.snapshot.paramMap.get('confirmCache');
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };


    this.http.get<any>(GlobalRootURL.BASE_API_URL + 'wallets/' + userId + '/confirm/' + confirmCache, options).subscribe(
      (log: HttpErrorResponse) => {
        this.message = log;
        console.log(this.message);
        console.log('before');
        if(this.transfer.sum$.getValue() !== undefined) {
          console.log('no undefined');
          this.transfer.sum$.subscribe((sum: number) => {
            console.log('$sum');
            let user: User = JSON.parse(localStorage.getItem('user'));
            user.wallet.sum = sum;

            this.transfer.setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
          })
        }
       }
     );
    this.userService.getUserById(parseInt(userId)).subscribe(
      (data: any)=>{
          let user = new User(data);
          this.loadWallet(data.wallet).subscribe( wallet => {
              user.setWallet(wallet);
              console.log(wallet.sum);
            }
          );
        console.log(user.wallet.sum);
        console.log(data);
        this.transfer.setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      }
    );
     this.router.navigate(['profile']);
     console.log(Number(userId));
    }
    loadWallet(id: number): Observable<Wallet> {
      return this.walletService.getWalletById(id).pipe(
        map((wallet: Wallet) => {
            return new Wallet(wallet);
          }
        )
      );
    }
}
