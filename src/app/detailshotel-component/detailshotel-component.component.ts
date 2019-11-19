import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../search-result-component/hotel';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { error } from 'util';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailshotelDialogComponent } from '../detailshotel-dialog/detailshotel-dialog.component';
import { Injectable } from '@angular/core';
import { room } from '../search-result-component/room';


export interface DialogData {
  roomId: number;
  hotelId: number;
}

@Component({
  selector: 'app-detailshotel-component',
  templateUrl: './detailshotel-component.component.html',
  styleUrls: ['./detailshotel-component.component.css']
})
@Injectable()
export class DetailshotelComponentComponent implements OnInit {
  
  hotel:Hotel;
  
 
readonly ROOT_URL = 'http://localhost:8080/hotels';
  constructor(private route:ActivatedRoute,private http:HttpClient,public dialog: MatDialog) { }
  hotelid:number;
  getInfo:Observable<Hotel>;
  realHOtel: Hotel;
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
   )


  }
  

}
