import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogConfirmComponent } from '../../shared/composants/dialog-confirm/dialog-confirm.component';

@Component({
  moduleId: module.id,
  selector: 'pdg-user-home',
  templateUrl: 'user-home.component.html',
  styleUrls: ['user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  displayedColumns = ['title', 'author', 'date', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  dataDialog = {
    title: 'Suppression',
    text: 'Voulez-vous vraiment supprimer cet utilisateur?',
    color: 'red'
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  editUser(userId){
    this.router.navigate(['./factory', '123'], {relativeTo: this.route});
  }
  openDialog(userId){
    console.log('+++++open dialog+++',userId, this.dataDialog)
    let dialogRef = this.dialog.open(DialogConfirmComponent, {
      panelClass: 'toto',
      width: '600px',
      height: '211px',
      data: this.dataDialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }


}
const ELEMENT_DATA = [
  {title: 'Hydrogen', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Helium', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Lithium', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Beryllium', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Boron', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Carbon', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Nitrogen', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Oxygen', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Fluorine', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Neon', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Sodium', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Magnesium', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Aluminum', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Silicon', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Phosphorus', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Sulfur', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Chlorine', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Argon', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Potassium', author: 'Kader Kane', date: '19/02/2018'},
  {title: 'Calcium', author: 'Kader Kane', date: '19/02/2018'},
];
