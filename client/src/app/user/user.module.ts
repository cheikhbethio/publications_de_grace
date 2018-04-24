import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';
import { UserFactoryModule } from '../shared/modules/user-factory/user-view.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FlexLayoutModule,
    UserFactoryModule,
    OwnMatMaduleModule
  ],
  declarations: [
    UserHomeComponent,
  ]
})
export class UserModule {
}
