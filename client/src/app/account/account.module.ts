import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';
import { AccountComponent } from './account.component';
import { DialogConfirmComponent } from '../shared/composants/dialog-confirm/dialog-confirm.component';
import { DialogContactComponent } from '../shared/composants/dialog-contact/dialog-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AccountRoutingModule,
    OwnMatMaduleModule
  ],
  declarations: [
    AccountHomeComponent,
    AccountComponent,
    DialogConfirmComponent,
    DialogContactComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    DialogConfirmComponent,
    DialogContactComponent
  ]
})
export class AccountModule { }
