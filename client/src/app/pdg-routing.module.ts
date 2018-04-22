import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { OwnMatMaduleModule } from './own-mat-madule/own-mat-madule.module';

const pdgRoutes: Routes = [
  {
    path: 'connection',
    loadChildren: 'app/connection/connection.module#ConnectionModule'
  },
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: 'rubric',
    loadChildren: 'app/rubric/rubric.module#RubricModule'
  },
  {
    path: 'home',
		pathMatch: 'full',
    component: HomeComponent
  },
  {
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
  // {
  //   path: '**',
	// 	redirectTo: '/home',
	// 	pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    CommonModule,BrowserModule, OwnMatMaduleModule,
    RouterModule.forRoot(pdgRoutes,{
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true, // <-- debugging purposes only
    })
  ],
	exports: [
		RouterModule
	],
  declarations: []
})
export class PdgRoutingModule { }


