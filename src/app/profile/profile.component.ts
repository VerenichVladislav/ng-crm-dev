import {Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService){}

  // getUserInfo(id: number) {
  //
  // }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
