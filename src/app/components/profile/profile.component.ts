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
  done: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService){}

  // getUserInfo(id: number) {
  //
  // }

  ngOnInit() {

      this.subscriptions.push(this.userService.getUserById(1)
        .subscribe(
          (data: User) => {
            this.user = new User(data);
            this.done = true;
          },
          error => {
            console.log(error)
          }));
    }

}
