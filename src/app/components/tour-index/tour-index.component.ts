import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Timestamp } from 'rxjs';
import { TourFilter } from '../../entity/TourFilter';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from '../../shared/TourService';

@Component({
  selector: 'app-tour-index',
  templateUrl: './tour-index.component.html',
  styleUrls: ['./tour-index.component.css']
})
@Injectable()
export class TourIndexComponent implements OnInit {
  @Input() status:boolean;
  constructor(private http: HttpClient, private router: Router,private address :ActivatedRoute,private service:TourService) { }
  ngOnInit() {
  }
  find(){
 this.router.navigate(['/tourResult']);
}

}
