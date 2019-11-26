import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { 
    this.hotelStatus = true;
    this.TourStatus = null;
    this.TicketStatus = null;
  }

  ngOnInit() {
  }
  hotelStatus:boolean;
  TourStatus:boolean;
  TicketStatus:boolean;
  selectHotel(){
    this.hotelStatus = true;
    this.TourStatus = null;
    this.TicketStatus = null;
  }
  selectTicket(){
    this.hotelStatus = null;
    this.TourStatus = null;
    this.TicketStatus = true;
  }
  selectTour(){
    this.hotelStatus = null;
    this.TourStatus = true;
    this.TicketStatus = null;
  }
  

}
