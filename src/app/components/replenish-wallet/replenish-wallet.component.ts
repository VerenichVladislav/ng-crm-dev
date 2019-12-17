import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WalletService } from '../../shared/wallet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';
import { DataTransferService } from 'src/app/shared/data-transfer.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { Wallet } from 'src/app/entity/wallet';
import { map } from 'rxjs/operators';
declare var $ :any;
@Component({
  selector: 'app-replenish-wallet',
  templateUrl: './replenish-wallet.component.html',
  styleUrls: ['./replenish-wallet.component.css']
})
export class ReplenishWalletComponent implements OnInit {

  replenishing: FormGroup;
  sum: FormControl;
  userId:number = JSON.parse(localStorage.getItem('user')).userId;
  message:any;
  constructor(private walletService: WalletService,
              private userService: UserService,
              private transfer: DataTransferService,
              private router: Router) { }

  ngOnInit() {
    this.replenishing = new FormGroup({
      sum: new FormControl()
    });
    console.log(this.userId);
    this.replenishing.controls.sum.valueChanges.subscribe((value)=>console.log(JSON.stringify(value)));
  }
  
  submit(){
    this.walletService.replenishWallet(this.replenishing.controls.sum, this.userId)
                .subscribe(
                    (log: HttpErrorResponse) => {
                        this.message = log;
                        console.log(this.message);
                    },
                    (error) => {
                      this.message = error.error;
                      console.log(this.message);
                    }
                );
    $('#myModal').modal('hide');

    }
}

