import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-error-dialog',
  imports: [MatDialogModule],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.scss',
})
export class ErrorDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA)public data:string
  ){

  }

}
