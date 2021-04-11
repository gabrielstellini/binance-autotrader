import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { PlOverviewComponent } from './dashboard-home/pl-overview/pl-overview.component';
import { DashboardMaterialModule } from './dashboard-material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    PlOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardMaterialModule,
    FlexLayoutModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
