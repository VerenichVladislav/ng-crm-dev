import { Component, OnInit, Injectable, Input } from '@angular/core';
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
  comments = [];
  message: any;
  newComment: FormGroup;
  newCommentCompany: FormGroup;
  newCommentTour: FormGroup;
  newCommentHotel: FormGroup;
  text: FormControl;
  hotelId:number;
  userId:number = JSON.parse(localStorage.getItem('user')).userId;
  asyncResult:any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commentsService: CommentsService){}

  ngOnInit() {
    console.log('userid: ' , this.userId);
    console.log('hotelid: ' , this.EntityId);
    console.log('type: ' , this.type);
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

    this.newComment.valueChanges.subscribe((value)=>console.log(JSON.stringify(value)));
  }

  async submit(){
      this.commentsService.submitForm(this.newComment.controls.text,this.EntityId, this.userId, this.type)
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
      }
}