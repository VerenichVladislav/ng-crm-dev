import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../entity/user';
import {RegisterService} from '../../shared/register.service';
import {Response} from 'selenium-webdriver/http';
import {LoginService} from '../../shared/login.service';
import {ConfirmEmailService} from '../../shared/confirm-email.service';
import {identityPasswordValidator} from '../../shared/identity-password.directive';
import {SnackBarComponent} from '../../../../components/snack-bar/snack-bar.component';
import {DataTransferService} from "../../../../shared/data-transfer.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  private errorLogin = false;
  private errorLoginLength = false;
  private errorLoginNull = false;
  private errorLoginUnique = false;
  private errorEmail = false;
  private errorEmailNull = false;
  private errorEmailUnique = false;
  private errorLastName = false;
  private errorLastNameLength = false;
  private errorLastNameNull = false;
  private errorFirstName = false;
  private errorFirstNameLength = false;
  private errorFirstNameNull = false;
  private errorPassword = false;
  private errorPasswordLength = false;
  private errorPasswordNull = false;

  constructor(private registerService: RegisterService,
              private loginService: LoginService,
              private confirmService: ConfirmEmailService,
              private errorConnection: SnackBarComponent,
              private transfer: DataTransferService,
              private router: Router,
              private spinnerService: Ng4LoadingSpinnerService,) {
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
    this.reset();
    this.spinnerService.show();
    this.registerService
      .registerUser(new User(userData), userData.hashPass)
      .subscribe(
        (resp: Response) => {
          this.errorLogin = false;

          this.loginService
            .loginUser(userData.userName, userData.hashPass)
            .subscribe(
              (loginResp: Response) => {

                this.transfer.setRole('USER');

                localStorage.setItem("auth_token", loginResp.headers.get('Authorization'));
                localStorage.setItem("user", JSON.stringify(new User(resp.body)));

                this.confirmService.confirmEmail(userData.userName).subscribe(
                  ()=> {},
                  error1 => {

                    console.log(error1);
                  }
                );

                this.spinnerService.hide();
                this.router.navigate(['profile']);
              },
              error => {
                console.log(error);
                if (error.error.message === 'NonUnique userName') {
                  this.errorLogin = true;
                }

                this.spinnerService.hide();
              });
        },
        error => {
          console.log(error);
          this.handleErrors(error);

          this.spinnerService.hide();
        });
  }

  handleErrors(error) {
    error.error.errors.forEach(
      (message: string) => {
        switch (message) {
          case 'Bad user name length': {
            this.errorLoginLength = true;
            break;
          }
          case 'Bad user name': {
            this.errorLogin = true;
            break;
          }
          case 'User name should be not null': {
            this.errorLoginNull = true;
            break;
          }
          case 'Not unique user name': {
            this.errorLoginUnique = true;
            break;
          }
          case 'Bad email': {
            this.errorEmail = true;
            break;
          }
          case 'Email should be not null': {
            this.errorEmailNull = true;
            break;
          }
          case 'Not unique email': {
            this.errorEmailUnique = true;
            break;
          }
          case 'Bad first name': {
            this.errorFirstName = true;
            break;
          }
          case 'Bad first name length': {
            this.errorFirstNameLength = true;
            break;
          }
          case 'First name should be not null': {
            this.errorFirstNameNull = true;
            break;
          }
          case 'Bad last name': {
            this.errorLastName = true;
            break;
          }
          case 'Bad last name length': {
            this.errorLastNameLength = true;
            break;
          }
          case 'Last name should be not null': {
            this.errorLastNameNull = true;
            break;
          }
          case 'Bad password': {
            this.errorPassword = true;
            break;
          }
          case 'Bad password length': {
            this.errorPasswordLength = true;
            break;
          }
          case 'Password should be not null': {
            this.errorPasswordNull = true;
            break;
          }
        }

      }
    );
    if(error.status === 0) {
      this.errorConnection.openSnackBar();
    }
  }

  reset() {
    this.errorLogin = false;
    this.errorLoginLength = false;
    this.errorLoginNull = false;
    this.errorLoginUnique = false;
    this.errorEmail = false;
    this.errorEmailNull = false;
    this.errorEmailUnique = false;
    this.errorLastName = false;
    this.errorLastNameLength = false;
    this.errorLastNameNull = false;
    this.errorFirstName = false;
    this.errorFirstNameLength = false;
    this.errorFirstNameNull = false;
    this.errorPassword = false;
    this.errorPasswordLength = false;
    this.errorPasswordNull = false;
  }

  ngOnInit() {
  }

}
