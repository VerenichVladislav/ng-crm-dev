import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotelFilters } from 'src/app/entity/HotelFilters';
import { HotelService } from 'src/app/shared/hotel.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';
import { City } from 'src/app/entity/city';
import { GlobalRootURL } from 'src/app/GlobalRootURL';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { Hotel } from 'src/app/entity/hotel';
import {FormControl} from '@angular/forms';
import { GapiSession } from 'src/app/google-service/GapiSession';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-hotelindex',
  templateUrl: './hotelindex.component.html',
  styleUrls: ['./hotelindex.component.css'],
  providers: [DatePipe],
})
@Injectable()
export class HotelindexComponent implements OnInit {

  constructor(private router: Router,
              public service:HotelService,
              private http:HttpClient,
              private spinnerService: Ng4LoadingSpinnerService,
              private datePipe:DatePipe,
              private _formBuilder: FormBuilder) {
    this.spinnerService.show();
    this.cityCollection = this.http.get<City>(GlobalRootURL.BASE_API_URL+"cities");
    this.spinnerService.hide();
  }
  minDate = new Date();
  displayFn(city?: City): string | undefined {
    return city.cityName ? city.cityName : undefined;
  }
  
  @Input() status:boolean;
  @Input() checkIn:Timestamp<Date>;
  @Input() checkOut:Timestamp<Date>;
  @Input() city:String;
  find(){
      var hotelFilter:HotelFilters = {
    city:this.city,
    CheckIn:this.datePipe.transform(this.checkIn, 'yyyy-MM-dd'),
    CheckOut:this.datePipe.transform(this.checkOut, 'yyyy-MM-dd')
   }



   this.service.setHotelFilter(hotelFilter);
   this.router.navigate(['/SearchResult']);
  }
  GoMap(){
    var filter = {} as HotelFilters
    this.service.setHotelFilter(filter);
 this.router.navigate(['/Mapfind']);
}
  findbyCity(city:string){
    console.log(city);
   this.city = city;


    this.find();
  }
  cityCollection:Observable<City>
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  filteredOptions: Observable<City>;
  options : City[];
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: new FormControl((new Date()).toISOString()),
    });
    this.cityCollection.forEach(element=>{
      this.options.push(element);
    })
    this.filteredOptions = this.firstFormGroup.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.cityName.toLowerCase().indexOf(filterValue) === 0);
  }

}
