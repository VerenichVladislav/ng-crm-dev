import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../../entity/hotel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Injectable } from '@angular/core';
import { room } from 'src/app/entity/room';
import { DetailshotelDialogComponent } from 'src/app/detailshotel-dialog/detailshotel-dialog.component';
import {GlobalRootURL} from '../../GlobalRootURL';



export interface DialogData {
  roomId: number;
  hotelId: number;
}

@Component({
  selector: 'app-detailshotel-component',
  templateUrl: './detailshotel.component.html',
  styleUrls: ['./detailshotel.component.css']
})
@Injectable()
export class DetailshotelComponentComponent implements OnInit {

  hotel:Hotel;
  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'hotels';
  hotelid:number;
  getInfo:Observable<Hotel>;
  realHOtel: Hotel;

  constructor(private route:ActivatedRoute,private http:HttpClient,public dialog: MatDialog) { }


  openDialog(room:room): void {
     this.dialog.open(DetailshotelDialogComponent, {
      data:{roomId:room.roomId,hotelId:this.hotelid}
    });
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.hotelid = id;


    this.http.get<Hotel>(this.ROOT_URL+"/"+id).subscribe(
     (data: Hotel) => {
       this.realHOtel = data;
       },
     error => {
       console.log(error)
     }
   )}
}
