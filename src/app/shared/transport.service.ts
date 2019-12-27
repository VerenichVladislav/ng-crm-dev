import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalRootURL} from "../GlobalRootURL";
import {Company} from "../entity/company";

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  readonly URL = GlobalRootURL.BASE_API_URL + 'transports';

  constructor(private http: HttpClient) { }

  getAllTransport(filter: any={}, pageNo: number=0,
                  pageSize: number=10, sortBy: string='name'): Observable<Transport[]>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };
    let request = this.URL + '/filter?pageNo=' + pageNo +
      '&pageSize=' + pageSize + '&sortBy=' + sortBy;

    return this.http.post<Transport[]>(request, filter, options);
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

  getByTransportName(name: string): Observable<any> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<Transport>(this.URL + '/?name=' + name, options);
  }

  deleteById(id: number): Observable<any>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.delete<any>(this.URL + '/' + id, options);
  }
}
