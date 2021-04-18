import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardMaterialModule } from './dashboard-material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfitLossComponent } from './dashboard-home/profit-loss/profit-loss.component';
import { ProfitLossSummaryComponent } from './dashboard-home/profit-loss-summary/profit-loss-summary.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    ProfitLossComponent,
    ProfitLossSummaryComponent
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
