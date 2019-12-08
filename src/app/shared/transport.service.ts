import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalRootURL} from "../GlobalRootURL";

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'transports';

  constructor(private http: HttpClient) { }

  getAllTransport(): Observable<Transport[]>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<Transport[]>(this.URL, options);
  }

  saveTransport(transport): Observable<any>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = {
      headers: headers ,
    };

    return this.http.post<any>(this.URL, transport, options);
  }

  deleteById(id: number): Observable<any>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.delete<any>(this.URL + '/' + id, options);
  }
}
