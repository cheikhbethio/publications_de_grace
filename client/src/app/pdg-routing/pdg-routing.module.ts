import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';

const pdgRoutes: Routes = [
  
  // {
  //   path: 'account',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canLoad: [AuthentificationService]
  // },
  {
    path: 'home',
    // pathMatch: 'full',
    component: HomeComponent
  },
  {
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},

  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // }
];

@NgModule({
  imports: [
    CommonModule,BrowserModule,
    RouterModule.forRoot(pdgRoutes,{
      preloadingStrategy: PreloadAllModules
    })
  ],
	exports: [
		RouterModule
	],
  declarations: []
})
export class PdgRoutingModule { }


