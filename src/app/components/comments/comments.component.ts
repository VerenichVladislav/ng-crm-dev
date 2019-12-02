import { Component, OnInit, Injectable, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { CommentsService } from '../../shared/comments.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


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
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  comments = [];
  message: any;
  newComment: FormGroup;
  text: FormControl;
  hotelId:number;
  commentId: number;
  userId:number = JSON.parse(localStorage.getItem('user')).userId;
  asyncResult:any;
  result:number=0;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commentsService: CommentsService){}

  ngOnInit() {
    if(this.type=1){
    this.comments = this.commentsService.getHotelComments(this.EntityId).subscribe(
      data => this.comments = data
     ) }
     else if(this.type=2){
      this.comments = this.commentsService.getTourComments(this.EntityId).subscribe(
        data => this.comments = data
       )
     } else if(this.type=3){
      this.comments = this.commentsService.getCompanyComments(this.EntityId).subscribe(
        data => this.comments = data
       )
     }
    this.newComment = new FormGroup({
      text: new FormControl()
    });
    //this.newComment.valueChanges.subscribe((value)=>console.log(JSON.stringify(value)));
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
  });
  console.log(rating);
}

  async submit(){
      this.commentsService.submitForm(this.newComment.controls.text, this.rating, this.EntityId, this.userId, this.type)
                  .subscribe(
                      (log: HttpErrorResponse) => {
                          this.message = log;
                      },
                      (error) => {
                        this.message = error.error;
                      }
                  );
                  if(this.type=1){
                    this.comments = this.commentsService.getHotelComments(this.EntityId).subscribe(
                      data => this.comments = data
                     );
                     this.asyncResult = await this.commentsService.getHotelComments(this.EntityId).toPromise();
                     }
                     else if(this.type=2){
                      this.comments = this.commentsService.getTourComments(this.EntityId).subscribe(
                        data => this.comments = data
                       );
                       this.asyncResult = await this.commentsService.getTourComments(this.EntityId).toPromise();
                     }
                     else if(this.type=3){
                      this.comments = this.commentsService.getCompanyComments(this.EntityId).subscribe(
                        data => this.comments = data
                       );
                       this.asyncResult = await this.commentsService.getCompanyComments(this.EntityId).toPromise();
                     }
                     window.location.reload();
      }
}
