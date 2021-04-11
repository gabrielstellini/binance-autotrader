import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HoldingsHomeComponent } from './components/holdings-home/holdings-home.component';

const holdingRoutes: Routes = [
  {
    path: '',
    component: HoldingsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(holdingRoutes)],
  exports: [RouterModule]
})

export class HoldingsRoutingModule { }
