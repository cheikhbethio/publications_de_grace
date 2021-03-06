import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserViewComponent } from '../shared/modules/user-factory/user-view/user-view.component';
import { UserResolverService } from '../shared/modules/user-factory/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  },
  {
    path: 'factory/:id',
    component: UserViewComponent,
    resolve: {user: UserResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [UserResolverService]
})
export class UserRoutingModule { }
