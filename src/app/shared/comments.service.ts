import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Injectable} from '@angular/core';
import {GlobalRootURL} from '../GlobalRootURL';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  user:any;
  hotel:string;
  tour:String;
  company:string;
  comments = [];
  newComment: FormGroup;
  readonly URL = GlobalRootURL.BASE_API_URL + 'comments/';
  constructor(private http: HttpClient) {}

  getHotelComments(id): any {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    return this.http.get(this.URL + 'hotel/' + id, options);
  }

  getCompanyComments(id): any {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    return this.http.get(this.URL + 'company/' + id, options);
  }

  getTourComments(id): any {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    return this.http.get(this.URL + 'tour/' + id, options);
  }


  delete(commentId: number, entityId:number, type: number): any{
    console.log(this.URL+commentId);
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    return this.http.delete<any>(this.URL+commentId, options);
  }

  submitForm(text: any, rating:number, entityId: number, userId:number, type: number): Observable<any> {
    //console.log(rating);
    if(type=1){
      this.newComment = new FormGroup({
        commentId: new FormControl(9999999),
        text,
        rate: new FormControl(rating),
        user: new FormControl({'userId' : userId }),
        hotel: new FormControl({'hotelId' : entityId })
      });
    }
       else if(type=2){
        this.newComment = new FormGroup({
          commentId: new FormControl(9999999),
          text,
          user: new FormControl({'userId' : userId }),
          tour: new FormControl({'tourId' : entityId })
        });
       }
       else if(type=3){
        this.newComment = new FormGroup({
          text,
          user: new FormControl({'userId' : userId }),
          company: new FormControl({'companyId' : entityId })
        });
       }
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    return this.http.post<any>(this.URL, this.newComment.value, options);

  }
}

