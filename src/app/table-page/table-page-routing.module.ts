import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablePagePage } from './table-page.page';

const routes: Routes = [
  {
    path: '',
    component: TablePagePage
  },
  {
    path: 'request-group-details',
    loadChildren: () => import('./request-group-details/request-group-details.module').then( m => m.RequestGroupDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablePagePageRoutingModule {}
