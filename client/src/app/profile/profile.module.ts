import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserFactoryModule } from '../shared/modules/user-factory/user-view.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    OwnMatMaduleModule,
    UserFactoryModule,
    FlexLayoutModule   
  ],
  declarations: [  ]
})
export class ProfileModule { }
