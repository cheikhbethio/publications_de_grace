import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; @Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'pdg-account-home',
  templateUrl: 'account-home.component.html',
  styleUrls: ['account-home.component.scss']
})
export class AccountHomeComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goTo(url) {
    this.router.navigateByUrl(url);
  }

}
