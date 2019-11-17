import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {User} from '../../../../entity/user';
import {FormControl, FormGroup} from '@angular/forms';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';
import {UserService} from '../../../../shared/user.service';
import {WalletService} from '../../../../shared/wallet.service';
import {Wallet} from '../../../../entity/wallet';
import {DataTransferService} from '../../../../shared/data-transfer.service';
import {TicketService} from '../../../../shared/ticket.service';
import {Ticket} from '../../../../entity/ticket';
import {CityService} from '../../../../shared/city.service';
import {City} from '../../../../entity/city';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm;
  private errorLogin = false;
  private errorPassword = false;
  private subscriptions: Subscription[] = [];

  constructor(private loginService: LoginService,
              private userService: UserService,
              private walletService: WalletService,
              private ticketService: TicketService,
              private cityService: CityService,
              private transferService: DataTransferService<Ticket[]>,
              private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(userData) {
    let tickets: Ticket[] = [];
    this.subscriptions.push(this.loginService
      .loginUser(userData.username, userData.password)
      .subscribe(
        (resp: Response) => {
          localStorage.setItem('auth_token', resp.headers.get('Authorization'));
          this.errorLogin = false;
          this.errorPassword = false;

          this.subscriptions.push(this.userService.getByUserName(userData.username)
            .subscribe(
              (data: any) => {
                this.subscriptions.push(this.walletService.getWalletById(data.wallet)
                  .subscribe(
                    (wallet: Wallet) => {
                      let user = new User(data);
                      user.setWallet(wallet);
                      localStorage.setItem('user', JSON.stringify(user));
                      this.loadTrips(tickets, data.id);
                      this.transferService.setData(tickets);
                    }
                  ));

                this.router.navigate(['profile']);
                this.hideLoginForm();
              },
              error => {
                console.log(error);
              }));
        },
        error => {
          if (error.error.message === 'Wrong userName') {
            this.errorLogin = true;
            this.errorPassword = false;

          } else if (error.error.message === 'Wrong password' ||
            error.error.message === 'NonUnique userName') {
            this.errorLogin = false;
            this.errorPassword = true;
          }
        }));
  }

  loadTrips(tickets, id) {
    this.subscriptions.push(this.ticketService.getAllByBuyerId(id)
      .subscribe(
        (all: any) => {
          all.forEach(
            (t: any) => {
              console.log(t);
              let ticket = new Ticket(t);
              this.cityService.getById(t.cityDest)
                .subscribe(
                  (city: City) =>{
                    ticket.cityDest = new City(city);
                  },
                  error1 => {
                    console.log(error1);
                  }
                );

              this.cityService.getById(t.cityFrom)
                .subscribe(
                  (city: City) =>{
                    ticket.cityFrom = new City(city);
                  },
                  error1 => {
                    console.log(error1);
                  }
                );
              tickets.push(ticket);
            }
        )},
        error => {
          console.log(error);
        }
      ));
  }



  showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
  }

  hideLoginForm() {
    document.getElementById('login-form').style.display = 'none';
  }


  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
