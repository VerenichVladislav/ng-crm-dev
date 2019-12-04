import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {User} from "../entity/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalRootURL} from "../GlobalRootURL";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly URL = GlobalRootURL.BASE_API_URL + 'companies';
  constructor(private http: HttpClient) { }

  saveCompany(company): Observable<any>{
    let headers = new HttpHeaders(

      {'Content-Type': 'application/json'});
    let options = {
      headers: headers ,
    };

    return this.http.post<any>(this.URL, company, options);
  }
}
