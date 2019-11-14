import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {User} from '../../../../user';
import {FormControl, FormGroup} from '@angular/forms';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';
import {UserService} from '../../../../user.service';

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
              private router: Router) {
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
              (data: User) => {
                localStorage.setItem('user', JSON.stringify(new User(data)));
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
          } else if (error.error.message === 'Wrong password') {
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
