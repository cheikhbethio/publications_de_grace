import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { DialogConfirmComponent } from '../../../composants/dialog-confirm/dialog-confirm.component';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from '../../../composants/dialog-contact/dialog-contact.component';

@Component({
  selector: 'pdg-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  onUpDate;

  dataDialog = {
    title: 'Suppression',
    text: 'Voulez-vous vraiment supprimer votre compte?',
    color: 'red'
  };

  contactDataDialog = {
    title: `Contacter l'administrateur`,
    color: 'green'
  };

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.onUpDate = this.router.url.endsWith("profile");
    console.log("onyupadte", this.onUpDate);
    this.activatedRoute.data.map(data => data.user)
      .subscribe(res => res);
  }

  openContactDialog() {
    console.log('-------------', this.contactDataDialog);
    let dialogRef = this.dialog.open(DialogContactComponent, {
      panelClass: 'toto',
      width: '600px',
      height: '211px',
      data: this.contactDataDialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // send message and close form
       return  console.log('The dialog was closed', result);
      }
      console.log('The dialog was closed by cancel');

    });

  }
  goToUpdatePage(){
    const id = '123'
    this.router.navigate(['./update', id], {relativeTo: this.activatedRoute});
  }

  openFenceDialog(){
    let dialogRef = this.dialog.open(DialogConfirmComponent, {
      panelClass: 'toto',
      width: '600px',
      height: '211px',
      data: this.dataDialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.router.navigate(["/"]);
      }
    });

  }

}
