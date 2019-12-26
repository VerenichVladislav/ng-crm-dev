import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-restore-password-dialog',
  templateUrl: './restore-password-dialog.component.html',
  styleUrls: ['./restore-password-dialog.component.css']
})
export class RestorePasswordDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: string) { }

  ngOnInit() {
  }

}
