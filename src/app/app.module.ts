import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ImgFallbackDirective } from './holdings/directives/img-fallback.directive';
import { CoinHoldingsComponent } from './holdings/components/holdings-home/coin-holdings/coin-holdings.component';
import { FiatHoldingsComponent } from './holdings/components/holdings-home/fiat-holdings/fiat-holdings.component';
import { HoldingsHomeComponent } from './holdings/components/holdings-home/holdings-home.component';
import { DashboardHomeComponent } from './holdings/components/dashboard-home/dashboard-home.component';
import { AppMaterialModule } from './app-material.module';
import { HeaderComponent } from './holdings/components/header/header.component';
import { ThemeMenuComponent } from './holdings/components/header/theme-menu/theme-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgFallbackDirective,
    CoinHoldingsComponent,
    FiatHoldingsComponent,
    HoldingsHomeComponent,
    DashboardHomeComponent,
    HeaderComponent,
    ThemeMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
