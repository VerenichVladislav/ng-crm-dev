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
  @Input() user: User;

  constructor(private userService: UserService) {}

  // getUserInfo(id: number) {
  //
  // }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(!!this.user)
      this.userService.updateUser(this.user.userName);
  }
}
