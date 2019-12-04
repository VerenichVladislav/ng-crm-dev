import { Component, OnInit } from '@angular/core';
import {User} from "../../../../entity/user";
import {UserService} from "../../../../shared/user.service";
import {AdminService} from "../../shared/admin.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  constructor(private userService: UserService,
              private adminService: AdminService) { }

  showAll() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
    },
      error => {
       console.log(error);
      });
  }

  lockUser(user: User) {
    console.log(user.userId);
    this.adminService.lockUser(user.userId).subscribe(
      () => {
        user.isLocked = true;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  unlockUser(user: User) {
    console.log(user.userId);
    this.adminService.unlockUser(user.userId).subscribe(
      () => {
        user.isLocked = false;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  ngOnInit() {

  }
}
