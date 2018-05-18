import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from '../shared/modules/user-factory/user-view/user-view.component';
import { UserResolverService } from '../shared/modules/user-factory/user-resolver.service';
import { UserEditComponent } from '../shared/modules/user-factory/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    resolve: {user: UserResolverService}
  },
  {
    path: 'update/:id',
    component: UserEditComponent,
    resolve: {user: UserResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolverService]
})
export class ProfileRoutingModule { }
