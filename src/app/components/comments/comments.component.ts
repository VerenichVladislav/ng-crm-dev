import { Component, OnInit, Injectable, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { CommentsService } from '../../shared/comments.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog.component'
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() type: number;
  //hotel = 1
  //tour = 2
  //company =3
  @Input() EntityId: number;
  @Input() rating: number;
  @Input() commentRating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  comments = [];
  message: any;
  newComment: FormGroup;
  text: FormControl;
  hotelId:number;
  userId:number = JSON.parse(localStorage.getItem('user')).userId;
  userName:string = JSON.parse(localStorage.getItem('user')).userName;
  asyncResult:any;
  comment:string;
  dialogRef: MatDialogRef<ConfirmationDialog>;

  constructor(
    private commentsService: CommentsService,
    private spinnerService: Ng4LoadingSpinnerService,
    public dialog: MatDialog){}

  ngOnInit() {
    if(this.type==1){
    this.comments = this.commentsService.getHotelComments(this.EntityId).subscribe(
      data => this.comments = data
     ) }
     else if(this.type==2){
      this.comments = this.commentsService.getTourComments(this.EntityId).subscribe(
        data => this.comments = data
       )
     } else if(this.type==3){
      this.comments = this.commentsService.getCompanyComments(this.EntityId).subscribe(
        data => this.comments = data
       )
     }
    this.newComment = new FormGroup({
      text: new FormControl()
    });
  }
  openConfirmationDialog(commentId:number) {
    this.dialogRef = this.dialog.open(ConfirmationDialog, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you to delete?"

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteComment(commentId);
      }
      this.dialogRef = null;
    });
  }
  deleteComment(commentId:number){
    this.spinnerService.show();

    this.commentsService.delete(commentId, this.EntityId, this.type).subscribe(
      data => {
        this.comments = data;
      }
    );
    setTimeout(() => {
      if(this.type=1){
        this.comments = this.commentsService.getHotelComments(this.EntityId).subscribe(
          data => this.comments = data
         );
         this.asyncResult = this.commentsService.getHotelComments(this.EntityId).toPromise();
         }
         else if(this.type=2){
          this.comments = this.commentsService.getTourComments(this.EntityId).subscribe(
            data => this.comments = data
           );
           this.asyncResult = this.commentsService.getTourComments(this.EntityId).toPromise();
         }
         else if(this.type=3){
          this.comments = this.commentsService.getCompanyComments(this.EntityId).subscribe(
            data => this.comments = data
           );
           this.asyncResult = this.commentsService.getCompanyComments(this.EntityId).toPromise();
         }
        },
        500);
    this.spinnerService.hide();
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
  });
}

  async submit(){
    if (($('#comment').val() as any).trim().length<1)
      {
          alert("Please, enter your comment...");
          return;
      }
      this.commentsService.submitForm(this.newComment.controls.text, this.rating, this.EntityId, this.userId, this.type)
                  .subscribe(
                      (log: HttpErrorResponse) => {
                          this.message = log;
                      },
                      (error) => {
                        this.message = error.error;
                      }
                  );
                  setTimeout(() => {
                  if(this.type=1){
                    this.comments = this.commentsService.getHotelComments(this.EntityId).subscribe(
                      data => this.comments = data
                     );
                     this.asyncResult = this.commentsService.getHotelComments(this.EntityId).toPromise();
                     }
                     else if(this.type=2){
                      this.comments = this.commentsService.getTourComments(this.EntityId).subscribe(
                        data => this.comments = data
                       );
                       this.asyncResult = this.commentsService.getTourComments(this.EntityId).toPromise();
                     }
                     else if(this.type=3){
                      this.comments = this.commentsService.getCompanyComments(this.EntityId).subscribe(
                        data => this.comments = data
                       );
                       this.asyncResult = this.commentsService.getCompanyComments(this.EntityId).toPromise();
                     }
                    },
                    500);
                     //window.location.reload();
      }
}
