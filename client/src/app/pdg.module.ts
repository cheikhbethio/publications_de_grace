import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { PdgComponent } from './pdg.component';
import { HomeComponent } from './home/home.component';
import { PdgRoutingModule }  from './pdg-routing/pdg-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ConnectionModule} from './connection/connection.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material';

const matModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    PdgComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    PdgRoutingModule,
    ConnectionModule,
    ...matModules
  ],
  providers: [MatIconRegistry],
  bootstrap: [PdgComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PdgModule { }
