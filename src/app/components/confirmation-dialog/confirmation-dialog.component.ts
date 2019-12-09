import { Component, Input, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) {}

  public confirmMessage:string;
}