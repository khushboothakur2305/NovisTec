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
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OTPPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'days',
    loadChildren: () => import('./days/days.module').then( m => m.DaysPageModule)
  },
  {
    path: 'week',
    loadChildren: () => import('./week/week.module').then( m => m.WeekPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'table-page',
    loadChildren: () => import('./table-page/table-page.module').then( m => m.TablePagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
