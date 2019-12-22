import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {DialogData} from "../../detailshotel/detailshotel.component";

@Component({
  selector: 'app-unconfirmed-email-dialog',
  templateUrl: './unconfirmed-email-dialog.component.html',
  styleUrls: ['./unconfirmed-email-dialog.component.css']
})
export class UnconfirmedEmailDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private data: string) {}

  ngOnInit() {
  }

}
