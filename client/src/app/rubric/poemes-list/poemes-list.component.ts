import { Component, OnInit } from '@angular/core';
import { MatIconRegistry} from '@angular/material'

@Component({
  selector: 'pdg-poemes-list',
  templateUrl: './poemes-list.component.html',
  styleUrls: ['./poemes-list.component.scss']
})
export class PoemesListComponent implements OnInit {
  searchCritaria;
  poeme = {
    title: 'La Miséricorde',
    author: 'Mamadou Ndiaye',
    nbComment: 32,
    date: '17/01/2010',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU35QC_wO__VOznw-lzmSvYq9is9_yOq9pQfCB1IiISbvn-xb_'
  };
  
  constructor(
    private  matIconRegistry:  MatIconRegistry,
  ) { }

  ngOnInit() {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  toto(){
    console.log('++++++++')
  }
}
