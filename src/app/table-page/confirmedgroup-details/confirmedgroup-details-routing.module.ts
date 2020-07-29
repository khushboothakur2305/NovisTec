import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmedgroupDetailsPage } from './confirmedgroup-details.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmedgroupDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmedgroupDetailsPageRoutingModule {}
