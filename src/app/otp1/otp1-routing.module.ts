import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OTP1Page } from './otp1.page';

const routes: Routes = [
  {
    path: '',
    component: OTP1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OTP1PageRoutingModule {}
