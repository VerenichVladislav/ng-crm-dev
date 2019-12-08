import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {User} from '../../../../entity/user';
import {RegisterService} from '../../shared/register.service';
import {Subscription} from 'rxjs';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';
import {ConfirmEmailService} from '../../shared/confirm-email.service';
import {identityPasswordValidator} from '../../shared/identity-password.directive';
import {SnackBarComponent} from '../../../../components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  private errorLogin = false;
  private subscriptions: Subscription[] = [];

  constructor(private registerService: RegisterService,
              private loginService: LoginService,
              private confirmService: ConfirmEmailService,
              private errorConnection: SnackBarComponent,
              private router: Router) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      hashPass: new FormControl(''),
      repeatPass: new FormControl(''),
    }, {validators: identityPasswordValidator}
    );
  }

  submit(userData) {
    this.subscriptions.push(this.registerService
      .registerUser(new User(userData), userData.hashPass)
      .subscribe(
        (resp: Response) => {
          this.errorLogin = false;

          this.subscriptions.push(this.loginService
            .loginUser(userData.userName, userData.hashPass)
            .subscribe(
              (loginResp: Response) => {
                localStorage.setItem("auth_token", loginResp.headers.get('Authorization'));
                localStorage.setItem("user", JSON.stringify(new User(resp.body)));
                this.confirmService.confirmEmail(userData.userName).subscribe(
                  ()=> {},
                  error1 => {
                    console.log(error1);
                  }
                );

                this.router.navigate(['profile']);
                this.hideRegisterForm();
              },
              error => {
                console.log(error);
                if(error.status === 0) {
                  this.errorConnection.openSnackBar();
                } else if (error.error.message === 'NonUnique userName') {
                  this.errorLogin = true;
                }
              }));
        },
        error => {
          console.log(error);
          if(error.status === 0) {
            this.errorConnection.openSnackBar();
          }
        }));
  }

  showRegisterForm() {
    document.getElementById('register-form').style.display='block';
  }

  hideRegisterForm() {
    document.getElementById('register-form').style.display='none';
  }

  go(){
    console.log('wow');
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
