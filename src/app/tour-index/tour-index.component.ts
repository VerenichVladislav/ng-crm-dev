import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tour-index',
  templateUrl: './tour-index.component.html',
  styleUrls: ['./tour-index.component.css']
})
export class TourIndexComponent implements OnInit {
  @Input() status:boolean;
  constructor() { }

  ngOnInit() {
  }

}
