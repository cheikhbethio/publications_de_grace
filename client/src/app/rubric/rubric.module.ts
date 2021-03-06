import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubricRoutingModule } from './rubric-routing.module';
import { PoemesListComponent } from './poemes-list/poemes-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatIconRegistry, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PoemeCardComponent } from '../shared/composants/poeme-card/poeme-card.component'
import { DialogPoemeComponent } from '../shared/composants/dialog-poeme/dialog-poeme.component';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';

@NgModule({
  imports: [
    CommonModule,
    RubricRoutingModule,
    FlexLayoutModule,
    FormsModule,
    OwnMatMaduleModule
  ],
  providers: [MatIconRegistry],
  entryComponents:[DialogPoemeComponent],
  declarations: [
    PoemesListComponent,
    PoemeCardComponent,
    DialogPoemeComponent
  ]
})
export class RubricModule { }
