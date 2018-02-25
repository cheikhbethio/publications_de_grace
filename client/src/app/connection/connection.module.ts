import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ConnectionRoutingModule, routes } from './connection-routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RememberPwdComponent } from './remember-pwd/remember-pwd.component';
import { ConnectionService } from './connection.service';


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
    FormsModule,
    RouterModule.forChild(routes),
    ...matModules
    // ConnectionRoutingModule,
  ],
  providers:[
    ConnectionService
  ],
  declarations: [LoginComponent, SignUpComponent, RememberPwdComponent]
})
export class ConnectionModule { }
