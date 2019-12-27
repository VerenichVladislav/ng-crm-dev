import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { TripDTO } from '../entity/TripDTO';
import { HttpClient} from '@angular/common/http';
import { GlobalRootURL } from '../GlobalRootURL';
import {SnackBarComponent} from "../components/snack-bar/snack-bar.component";

@Component({
  selector: 'app-tour-dialog',
  templateUrl: './tour-dialog.component.html',
  styleUrls: ['./tour-dialog.component.css']
})
export class TourDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:TourData
  ,private _snackBar: MatSnackBar,
  private http: HttpClient,
  private notMoneySnackBar: SnackBarComponent,
  public dialogRef: MatDialogRef<TourDialogComponent>) { }
  TripChoise:TripDTO[];
  @Input() firstName:string;
  @Input() secondName:string;
  TourId:number[] = [];
  ngOnInit() {
    this.TripChoise = this.data.TripChoise;
    this.TripChoise.forEach(element => {
      this.TotalCost+= Number(element.price)
      this.TourId.push(element.tripId);
    });
  }
  TotalCost:number=0;
  userId:number;
  readonly ROOT_URL = GlobalRootURL.BASE_API_URL + 'trips';
  Buy(){
    this.userId = JSON.parse(localStorage.getItem('user')).userId;
    if(typeof this.firstName === "undefined"|| typeof this.secondName === "undefined"){
      this.openSnackBar("Enter First and Second name","pls!")
    }
    else if(typeof(this.userId)==="undefined"|| this.userId === null){
      this.openSnackBar("Login","PLS!!!!!!!!!")
    }
    else if(typeof(this.TripChoise)==="undefined" || this.TotalCost==0){
      this.openSnackBar("You not choise city to your tour :(","Return to map!")
    }
    else{
      console.log(this.userId);

      let body = {userId:this.userId,firstName:this.firstName,lastName:this.secondName,tripIdList:this.TourId};

      this.http.post<any>(this.ROOT_URL +"/byTour",body).subscribe(response => {
        console.log(response);
        return response;
    }, err => {
        this.notMoneySnackBar.openNoMoney();
        console.log(err.message);
    });
    this.openSnackBar("You Buy Tour!","Ok")
    };
    this.dialogRef.close();

    }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
export class TourData{
  TripChoise:TripDTO[]
}
export class TourResponse{
  userId:number;
  firstName:string;
  lastName:string;
  tripIdList:number[];

}
