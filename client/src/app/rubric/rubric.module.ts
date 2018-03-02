import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubricRoutingModule } from './rubric-routing.module';
import { PoemesListComponent } from './poemes-list/poemes-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatIconRegistry } from '@angular/material';
import { FormsModule } from '@angular/forms';

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    RubricRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ...matModules
  ],
  providers: [MatIconRegistry],
  declarations: [PoemesListComponent]
})
export class RubricModule { }
