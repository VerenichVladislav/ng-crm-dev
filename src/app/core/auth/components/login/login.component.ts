import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from '../../../../user';
import {FormControl, FormGroup} from '@angular/forms';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm;
  private user: User;
  private authToken: string;
  private subscriptions: Subscription[] = [];

  constructor(private loginService: LoginService) {
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
          console.log(resp);
          console.log(resp.headers);
        },
        error => {
          console.log(error);
        }));
  }

  ngOnInit() {
  }
}
