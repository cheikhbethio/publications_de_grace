import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnMatMaduleModule } from '../../../own-mat-madule/own-mat-madule.module';
import { UserViewComponent } from './user-view/user-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OwnMatMaduleModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
  declarations: [
    UserViewComponent,
    UserEditComponent, 
  ],
})
export class UserFactoryModule { }