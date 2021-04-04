import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
