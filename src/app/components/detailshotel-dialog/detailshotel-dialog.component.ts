import {Component, OnInit,Inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Timestamp, Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DialogData } from '../detailshotel/detailshotel.component';
import {GlobalRootURL} from '../../GlobalRootURL';
import {SnackBarComponent} from '../snack-bar/snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LocaleStorageService} from "../../shared/locale-storage.service";


@Component({
  selector: 'app-detailshotel-dialog',
  templateUrl: './detailshotel-dialog.component.html',
  styleUrls: ['./detailshotel-dialog.component.css'],
  providers: [DatePipe]
})

export class DetailshotelDialogComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  roomId:number;
  @Input() checkIn:Timestamp<Date>;
 @Input() checkOut:Timestamp<Date>;
  hotelId:number;

  @Input() userId:number;
    postres:Observable<String>

  constructor(private datePipe: DatePipe,
              private http: HttpClient,
              private _formBuilder: FormBuilder,
              private errorConnection: SnackBarComponent,
              public dialogRef: MatDialogRef<DetailshotelDialogComponent>,
              private _snackBar: MatSnackBar,
              private localStorageService: LocaleStorageService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      this.roomId = data.roomId;
      this.hotelId = data.hotelId;
    }
    mindate = new Date();


  Reservetion(){

    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json'});

    let CkDate:string = this.datePipe.transform(this.checkIn, 'yyyy-MM-dd ');
    let CoDate:string = this.datePipe.transform(this.checkOut,'yyyy-MM-dd ');
    CkDate +="06:55:40.11";
    CoDate +="06:55:40.11";
    this.userId = JSON.parse(localStorage.getItem('user')).userId;
    let Url = GlobalRootURL.BASE_API_URL + "hotels/"+this.userId+"/"+this.hotelId+"/"+CkDate+"/"+CoDate+"/"+this.roomId;
    console.log(Url);
     this.http.post(Url,{},{headers: headers}).subscribe(
      (data: any) => {
        this.localStorageService.addTo('user','reservations', data);
      },
      error => {
        console.log(error);
        if(error.status === 0) {
          this.errorConnection.openSnackBar();
        }
      }
    )
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }
}
