import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';
import { UserFactoryComponent } from './user-factory/user-factory.component';
import { DialogConfirmComponent } from '../shared/composants/dialog-confirm/dialog-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FlexLayoutModule,
    OwnMatMaduleModule
  ],
  declarations: [
    DialogConfirmComponent,
    UserHomeComponent,
    UserFactoryComponent
  ],
  entryComponents:[DialogConfirmComponent],  
})
export class UserModule {
}
