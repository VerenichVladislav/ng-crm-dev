import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { User } from 'src/app/entity/user';
import {DataTransferService} from '../../shared/data-transfer.service';
import {Ticket} from '../../entity/ticket';
import {Reservation} from '../../entity/reservation';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {ConfirmEmailService} from "../../core/auth/shared/confirm-email.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../shared/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {Transport} from "../../entity/transport";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{
  private user: User;
  private reservations: Reservation[] = [];
  private tickets: Ticket[] = [];
  private changeForm;
  private dataSourceReservations;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private transfer: DataTransferService,
              private router: Router,
              private userService: UserService,
              private spinnerService: Ng4LoadingSpinnerService,
              private confirmService: ConfirmEmailService) {

    this.changeForm = new FormGroup({
      newPassword: new FormControl(''),
      repeatPassword: new FormControl('')
    });

    this.spinnerService.show();

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.spinnerService.hide();

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
        if(!!this.user) {
          this.reservations = this.user.reservations;
          this.tickets = this.user.tickets;
        }
      });

    this.dataSourceReservations = this.reservations;
    this.dataSourceReservations.paginator = this.paginator;
  }

  sendConfirmEmail(userName: string) {
    this.confirmService.confirmEmail(userName).subscribe(
      ()=> {},
      error1 => {
        console.log(error1);
      }
    );
  }

  submit(data: any) {
    const userName = JSON.parse(localStorage.getItem('user')).userName;
    this.userService.updatePassword(userName, data.newPassword).subscribe(
      () => {

      },
      error1 => {

      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {}

  isLater(date: string): boolean {
    return new Date(date) > new Date();
  }
}
