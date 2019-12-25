import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {User} from '../../../../entity/user';
import {FormControl, FormGroup} from '@angular/forms';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';
import {UserService} from '../../../../shared/user.service';
import {WalletService} from '../../../../shared/wallet.service';
import {DataTransferService} from '../../../../shared/data-transfer.service';
import {TicketService} from '../../../../shared/ticket.service';
import {CityService} from '../../../../shared/city.service';
import {ReservationService} from '../../../../shared/reservation.service';
import {HotelService} from '../../../../shared/hotel.service';
import {SnackBarComponent} from '../../../../components/snack-bar/snack-bar.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginForm;
  private errorLogin = false;
  private errorPassword = false;
  private errorLocked = false;
  private subscriptions: Subscription[] = [];

  constructor(private loginService: LoginService,
              private userService: UserService,
              private walletService: WalletService,
              private ticketService: TicketService,
              private cityService: CityService,
              private hotelService: HotelService,
              private reservationService: ReservationService,
              private transfer: DataTransferService,
              private errorConnection: SnackBarComponent,
              private spinnerService: Ng4LoadingSpinnerService,
              private location: Location) {

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(userData: any) {
    this.spinnerService.show();
    this.subscriptions.push(this.loginService
      .loginUser(userData.username, userData.password)
      .subscribe(
        (resp: Response) => {
          localStorage.setItem('auth_token', resp.headers.get('Authorization'));
          this.reset();
          this.subscriptions.push(this.userService.getByUserName(userData.username)
            .subscribe(
              (data: any) => {
                let user = new User(data);
                this.transfer.setRole(data.role);

                this.walletService.loadWallet(data.wallet).subscribe( wallet => {
                    user.setWallet(wallet);
                  }
                );
                user.tickets.forEach(ticket => {

                  this.cityService.loadCity(ticket.cityFrom.cityId).subscribe( city => {
                      ticket.setCityFrom(city);
                    }
                  );

                  this.cityService.loadCity(ticket.cityDest.cityId).subscribe( city => {
                    ticket.setCityDest(city);
                    }
                  );
                });

                user.reservations.forEach(reserv => {
                  this.hotelService.loadHotel(reserv.hotel.hotelId).subscribe( hotel => {
                      reserv.setHotel(hotel);
                    }
                  );

                });
                this.spinnerService.hide();

                localStorage.setItem('user', JSON.stringify(user));
                this.transfer.setUser(user);
                this.location.back();
              },
              error => {
                this.spinnerService.hide();
                console.log(error);
              }));
        },
        error => {
          this.spinnerService.hide();
          console.log(error);
          this.handleErrors(error);
        }));
  }

  restorePassword(userData) {
    this.userService.sendPassword(userData.username).subscribe(
      () => {},
      error1 => {
        console.log(error1);
      }
    )
  }


  reset() {
    this.errorLogin = false;
    this.errorPassword = false;
    this.errorLocked = false;
  }

  ngOnInit() {
    localStorage.clear();
  }

  ngOnDestroy(){
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  handleErrors(error) {
    switch (error.error.message) {
      case 'Wrong userName': {
        this.errorLogin = true;
        break;
      }
      case 'Wrong password' || 'NonUnique userName': {
        this.errorPassword = true;
        break;
      }
      case 'Locked': {
        this.errorLocked = true;
        break;
      }
    }
    if(error.status === 0) {
      this.errorConnection.openSnackBar();
    }
  }
}
