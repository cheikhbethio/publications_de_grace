import { Component, OnInit } from '@angular/core';
import { MatIconRegistry} from '@angular/material'

@Component({
  selector: 'pdg-poemes-list',
  templateUrl: './poemes-list.component.html',
  styleUrls: ['./poemes-list.component.scss']
})
export class PoemesListComponent implements OnInit {
  searchCritaria;

  constructor(
    private  matIconRegistry:  MatIconRegistry,
  ) { }

  ngOnInit() {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}
