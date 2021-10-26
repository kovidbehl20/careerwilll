import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule),
  // },
  {
    path: 'dasboard',
    loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'live-classes',
    loadChildren: () => import('./feature/live-classes/live-classes.module').then(m => m.LiveClassesModule),
  },
  {
    path: 'classes',
    loadChildren: () => import('./feature/classes/classes.module').then(m => m.ClassesModule),
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
