import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';

const routes: Routes = [
  {
    path: '',
    // component: AccountHomeComponent,
    children: [
      {
        path: '',
        component: AccountHomeComponent
      },
      {
        path: 'users',
        loadChildren: 'app/user/user.module#UserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
