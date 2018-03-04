import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pdg-poeme-card',
  templateUrl: './poeme-card.component.html',
  styleUrls: ['./poeme-card.component.scss']
})
export class PoemeCardComponent implements OnInit {

  @Input () poeme;

  // toto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU35QC_wO__VOznw-lzmSvYq9is9_yOq9pQfCB1IiISbvn-xb_';

  constructor() { }

  ngOnInit() {
  }

}
