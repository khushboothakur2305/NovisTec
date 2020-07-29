import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysPage } from './days.page';

const routes: Routes = [
  {
    path: '',
    component: DaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysPageRoutingModule {}
