import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatIconRegistry} from '@angular/material'

@Component({
  moduleId: module.id,
  selector: 'pdg-root',
  templateUrl: 'pdg.component.html',
  styleUrls: ['pdg.component.scss']
})
export class PdgComponent implements OnInit {
  title = 'Les publications de grâces';
  public constructor(
    private titleService: Title,
    private  matIconRegistry:  MatIconRegistry,
  ) { }

  ngOnInit(): void {
    this.setTitle('Les publications de grâces');
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
