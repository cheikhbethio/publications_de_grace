import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'pdg-dialog-poeme',
  templateUrl: './dialog-poeme.component.html',
  styleUrls: ['./dialog-poeme.component.scss']
})
export class DialogPoemeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPoemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
