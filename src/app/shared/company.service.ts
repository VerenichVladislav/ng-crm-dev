import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {User} from "../entity/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalRootURL} from "../GlobalRootURL";
import {Company} from "../entity/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly URL = GlobalRootURL.BASE_API_URL + 'companies';
  constructor(private http: HttpClient) { }

  deleteByName(name: string): Observable<any>{
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.delete<any>(this.URL + '/?companyName=' + name, options);
  }

  saveCompany(company): Observable<Company>{
    let headers = new HttpHeaders(
      {'Content-Type': 'application/json'});
    let options = {
      headers: headers ,
    };

    return this.http.post<Company>(this.URL, company, options);
  }

  getAllCompanies(filter: any={}): Observable<Company[]> {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.post<Company[]>(this.URL + '/filter', filter, options);
  }

  getByCompanyName(name: string) {
    let headers = new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('auth_token')});
    let options = { headers: headers };

    return this.http.get<Company>(this.URL + '/?name=' + name, options);
  }
}
