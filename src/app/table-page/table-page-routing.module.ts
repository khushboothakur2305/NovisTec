import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablePagePage } from './table-page.page';

const routes: Routes = [
  {
    path: '',
    component: TablePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablePagePageRoutingModule {}
