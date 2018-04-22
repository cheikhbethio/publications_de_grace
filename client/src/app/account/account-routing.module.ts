import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountComponent } from './account.component';
import { OwnMatMaduleModule } from '../own-mat-madule/own-mat-madule.module';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: AccountHomeComponent
      },
      {
        path: 'users',
        loadChildren: 'app/user/user.module#UserModule'
      },
      {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
    , OwnMatMaduleModule
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
