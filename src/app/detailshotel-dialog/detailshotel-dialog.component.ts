import {Component, OnInit,Inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../detailshotel-component/detailshotel-component.component';
import { Timestamp, Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


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
    
  constructor(private datePipe: DatePipe,private http: HttpClient,private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<DetailshotelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      this.roomId = data.roomId;
      this.hotelId = data.hotelId;
    }
  
    
  Reservetion(){
   
    let headers = new HttpHeaders;
    headers.append('Content-Type','application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    let CkDate:string = this.datePipe.transform(this.checkIn, 'yyyy-MM-dd ');
    let CoDate:string = this.datePipe.transform(this.checkOut,'yyyy-MM-dd ');
    CkDate +="06:55:40.11";
    CoDate +="06:55:40.11"
    let Url = "http://localhost:8080/hotels/"+this.userId+"/"+this.hotelId+"/"+CkDate+"/"+CoDate+"/"+this.roomId;
    console.log(Url);
     this.http.post(Url,{headers:headers}).subscribe(
      (data: any) => {
      
      },
      error => {
        console.log(error)
      }
    )
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
