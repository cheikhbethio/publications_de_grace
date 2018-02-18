import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ConnectionRoutingModule, routes } from './connection-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    // ConnectionRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class ConnectionModule { }
