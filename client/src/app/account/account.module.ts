import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './account-home/account-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';


const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AccountRoutingModule,
    ...matModules
  ],
  declarations: [AccountHomeComponent]
})
export class AccountModule { }
