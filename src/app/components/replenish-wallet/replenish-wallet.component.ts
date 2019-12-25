import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WalletService } from '../../shared/wallet.service';
import { DataTransferService } from 'src/app/shared/data-transfer.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
              private transfer: DataTransferService,
              private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.replenishing = new FormGroup({
      sum: new FormControl()
    });
    console.log(this.userId);
    this.replenishing.controls.sum.valueChanges.subscribe((value)=>console.log(JSON.stringify(value)));
  }

  async submit(){
    if(this.replenishing.controls.sum.value==0){
      $('#myModal').modal('hide');
      $('#myModal3').modal('show');
      }
    else {
      this.spinnerService.show();
      localStorage.setItem('sum', JSON.stringify(this.replenishing.controls.sum.value));
      
      await this.walletService.replenishWallet(this.replenishing.controls.sum, this.userId).toPromise();
      $('#myModal').modal('hide');
      this.spinnerService.hide();
      $('#myModal2').modal('show');
      }
    }
}

