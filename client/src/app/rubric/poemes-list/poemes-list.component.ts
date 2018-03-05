import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog} from '@angular/material'
import { DialogPoemeComponent } from '../../shared/composants/dialog-poeme/dialog-poeme.component';

@Component({
  selector: 'pdg-poemes-list',
  templateUrl: './poemes-list.component.html',
  styleUrls: ['./poemes-list.component.scss']
})
export class PoemesListComponent implements OnInit {
  searchCritaria;
  animal: string;
  name: string;
  poeme = {
    title: 'La Miséricorde',
    author: 'Mamadou Ndiaye',
    nbComment: 32,
    date: '17/01/2010',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU35QC_wO__VOznw-lzmSvYq9is9_yOq9pQfCB1IiISbvn-xb_'
  };

  constructor(
    private matIconRegistry: MatIconRegistry,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  openPoemeDialog(): void {
    let dialogRef = this.dialog.open(DialogPoemeComponent, {
      width: '80%',
      height: '90%',
      panelClass: 'dialogPoeme',
      // maxHeight: '90%',
      data: this.poeme
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
