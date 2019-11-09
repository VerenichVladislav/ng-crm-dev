import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  private isActiveUser: boolean;
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    this.isActiveUser = JSON.parse(localStorage.getItem('user')) !== null;
  }
}
