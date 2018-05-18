import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'pdg-dialog-contact',
  templateUrl: 'dialog-contact.component.html',
  styleUrls: ['dialog-contact.component.scss']
})
export class DialogContactComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
