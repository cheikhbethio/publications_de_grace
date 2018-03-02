import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemesListComponent } from './poemes-list/poemes-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: PoemesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricRoutingModule { }
