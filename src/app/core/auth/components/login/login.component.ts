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
              private router: Router,
              private transfer: DataTransferService) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(userData) {
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

  showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
  }

  hideLoginForm() {
    document.getElementById('login-form').style.display = 'none';
  }


  ngOnInit() {
  }
}
