import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ConnectionRoutingModule, routes } from './connection-routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ...matModules
    // ConnectionRoutingModule,
  ],
  declarations: [LoginComponent, SignUpComponent]
})
export class ConnectionModule { }
