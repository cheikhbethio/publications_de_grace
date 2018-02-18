import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { PdgComponent } from './pdg.component';
import { HomeComponent } from './home/home.component';
import { PdgRoutingModule }  from './pdg-routing/pdg-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ConnectionModule} from './connection/connection.module'

@NgModule({
  declarations: [
    PdgComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    PdgRoutingModule,
    ConnectionModule
  ],
  providers: [],
  bootstrap: [PdgComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PdgModule { }
