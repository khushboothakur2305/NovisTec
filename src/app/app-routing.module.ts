import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'otp1',
    loadChildren: () => import('./otp1/otp1.module').then( m => m.OTP1PageModule)
  },
  {
    path: 'select-club',
    loadChildren: () => import('./select-club/select-club.module').then( m => m.SelectClubPageModule)
  },
  {
    path: 'select-city',
    loadChildren: () => import('./select-city/select-city.module').then( m => m.SelectCityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
