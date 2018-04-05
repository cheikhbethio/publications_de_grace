import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AccountRoutingModule,
    OwnMatMaduleModule
  ],
  declarations: [
    AccountHomeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AccountModule { }
