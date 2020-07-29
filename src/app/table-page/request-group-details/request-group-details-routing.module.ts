import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestGroupDetailsPage } from './request-group-details.page';

const routes: Routes = [
  {
    path: '',
    component: RequestGroupDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestGroupDetailsPageRoutingModule {}
