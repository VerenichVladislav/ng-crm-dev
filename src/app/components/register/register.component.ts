import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {User} from '../../user';
import {RegisterService} from '../../register.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  private user: User;
  private authToken: string;
  private subscriptions: Subscription[] = [];

  constructor(private registerService: RegisterService) {
    this.registerForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      psw: new FormControl('')
    });
  }

  submit(userData) {
    this.subscriptions.push(this.registerService
      .registerUser(userData.username, userData.email, userData.psw)
      .subscribe(
        (data: User) => {
          this.user = new User(data);
        },
        error => {
          console.log(error)
        }));
  }

  getUser(): User{
    return this.user;
  }


  ngOnInit() {
  }

}
