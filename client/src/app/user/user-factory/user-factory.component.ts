import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'pdg-user-factory',
  templateUrl: './user-factory.component.html',
  styleUrls: ['./user-factory.component.scss']
})
export class UserFactoryComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.map(data => data.user)
      .subscribe(res => console.log('+++++++++++++', res))
  }

}
