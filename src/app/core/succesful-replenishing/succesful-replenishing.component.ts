import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalRootURL } from 'src/app/GlobalRootURL';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User } from 'src/app/entity/user';
import { Wallet } from 'src/app/entity/wallet';
import { map } from 'rxjs/operators';
import { WalletService } from 'src/app/shared/wallet.service';
import { UserService } from 'src/app/shared/user.service';
import { DataTransferService } from 'src/app/shared/data-transfer.service';

@Component({
  selector: 'app-succesful-replenishing',
  templateUrl: './succesful-replenishing.component.html',
  styleUrls: ['./succesful-replenishing.component.css']
})
export class SuccesfulReplenishingComponent implements OnInit {
  message: any;
  private subscriptions: Subscription[] = [];
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private walletService: WalletService,
              private userService: UserService,
              private transfer: DataTransferService,
              private router: Router) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    const confirmCache = this.route.snapshot.paramMap.get('confirmCache');
    this.http.get<any>(GlobalRootURL.BASE_API_URL + 'wallets/' + userId + '/confirm/' + confirmCache).subscribe(
      (log: HttpErrorResponse) => {
        this.message = log;
        console.log(this.message);
       }
     );
     console.log(Number(userId));
      this.subscriptions.push(this.userService.getUserById(Number(userId))
      .subscribe(
        (data: any) => {
          let user = new User(data);
          this.loadWallet(data.wallet).subscribe( wallet => {
            user.setWallet(wallet);
            }
          );
          this.transfer.setUser(user);
          this.router.navigate(['profile']);
        },
        error => {
          console.log(error);
        }));
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
