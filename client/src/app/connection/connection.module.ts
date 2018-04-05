import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ConnectionRoutingModule, routes } from './connection-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RememberPwdComponent } from './remember-pwd/remember-pwd.component';
import { ConnectionService } from './connection.service';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    OwnMatMaduleModule,
    RouterModule.forChild(routes),
    // ConnectionRoutingModule,
  ],
  providers:[
    ConnectionService
  ],
  declarations: [LoginComponent, SignUpComponent, RememberPwdComponent]
})
export class ConnectionModule { }
