import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinHoldingsComponent } from './components/holdings-home/coin-holdings/coin-holdings.component';
import { FiatHoldingsComponent } from './components/holdings-home/fiat-holdings/fiat-holdings.component';
import { HoldingsHomeComponent } from './components/holdings-home/holdings-home.component';
import { HoldingsMaterialModule } from './holdings-material.module';
import { FormsModule } from '@angular/forms';
import { HoldingsRoutingModule } from './holdings-routing.module';

@NgModule({
  declarations: [
    CoinHoldingsComponent,
    FiatHoldingsComponent,
    HoldingsHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HoldingsRoutingModule,
    HoldingsMaterialModule
  ]
})
export class HoldingsModule { }
