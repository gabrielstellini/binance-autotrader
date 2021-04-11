import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: []
  },
  {
    path: 'holdings',
    loadChildren: () => import('./holdings/holdings.module').then(m => m.HoldingsModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: 'holdings',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
