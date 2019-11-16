import {Component, DoCheck, Input, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements DoCheck{
  private user: User;
  constructor() {}


  ngDoCheck() {
    if(localStorage.getItem('auth_token') === null) {
      this.user = null;
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
}
