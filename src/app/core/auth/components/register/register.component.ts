import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../../../user';
import {RegisterService} from '../../shared/register.service';
import {Subscription} from 'rxjs';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';
import {ConfirmEmailService} from '../../shared/confirm-email.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  private subscriptions: Subscription[] = [];

  constructor(private registerService: RegisterService,
              private loginService: LoginService,
              private confirmService: ConfirmEmailService,
              private router: Router) {
    this.registerForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      hashPass: new FormControl('')
    });
  }

  submit(userData) {
    this.subscriptions.push(this.registerService
      .registerUser(new User(userData))
      .subscribe(
        (resp: Response) => {
          this.subscriptions.push(this.loginService
            .loginUser(userData.userName, userData.hashPass)
            .subscribe(
              (loginResp: Response) => {
                localStorage.setItem("auth_token", loginResp.headers.get('Authorization'));
                localStorage.setItem("user", JSON.stringify(new User(userData)));

                this.confirmService.confirmEmail(userData.userName);

                this.router.navigate(['profile']);
                this.hideRegisterForm();
              },
              error => {
                console.log(error);
              }));
        },
        error => {
          console.log(error)
        }));
  }

  showRegisterForm() {
    document.getElementById('register-form').style.display='block';
  }

  hideRegisterForm() {
    document.getElementById('register-form').style.display='none';
  }

  ngOnInit() {
  }

}
