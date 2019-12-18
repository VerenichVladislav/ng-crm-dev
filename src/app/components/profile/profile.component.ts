import {Component, OnDestroy, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';
import {Ticket} from '../../entity/ticket';
import {Reservation} from '../../entity/reservation';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{
  private user: User;
  private reservations: Reservation[] = [];
  private tickets: Ticket[] = [];
  constructor(private transfer: DataTransferService,
              private router: Router,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {

        //if (!this.user) {
          this.user = JSON.parse(localStorage.getItem('user'));

          if (this.transfer.user$.getValue() !== undefined) {
            this.transfer.user$.subscribe(value => {
              this.user = value;
              if (!!this.user) {
                localStorage.setItem('user', JSON.stringify(this.user));
              }
            });
          } else {
            this.user = JSON.parse(localStorage.getItem('user'));
          }
        //}
        this.reservations = this.user.reservations;
        this.tickets = this.user.tickets;

        this.spinnerService.hide();
      });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  isLater(date: string): boolean {
    return new Date(date) > new Date();
  }
}
