import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../../../user';
import {RegisterService} from '../../shared/register.service';
import {Subscription} from 'rxjs';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  private user: User;
  private authToken: string;
  private subscriptions: Subscription[] = [];

  constructor(private registerService: RegisterService,
              private loginService: LoginService) {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(userData) {
    this.subscriptions.push(this.registerService
      .registerUser(userData.username, userData.email, userData.password)
      .subscribe(
        (resp: Response) => {
          console.log(resp);
          //this.user = new User(resp);
          console.log(resp.headers);
        },
        error => {
          console.log(error)
        }));
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

  getUser(): User{
    return this.user;
  }


  ngOnInit() {
  }

}
