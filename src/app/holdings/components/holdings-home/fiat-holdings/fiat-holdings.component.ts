import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApiResponse, PriceSymbol } from '../../../models/apiResponse';
import { MatTableDataSource } from '@angular/material/table';
import { FiatHolding } from '../../../models/view.model';

@Component({
  selector: 'app-fiat-holdings',
  templateUrl: './fiat-holdings.component.html',
  styleUrls: ['./fiat-holdings.component.scss']
})
export class FiatHoldingsComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatSort, { static: true }) private sort?: MatSort;
  @Input() apiData?: ApiResponse;
  @Input() hideZeroBalances = true;

  holdingsTableData = new MatTableDataSource<FiatHolding>([] as FiatHolding[]);
  displayedColumns: string[] = [
    'icon',
    'baseFiat',
    'liquid',
    'coin',
    'total'
  ];

  ngAfterViewInit(): void {
    if (this.sort) {
      this.holdingsTableData.sort = this.sort;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.apiData) {
      this.holdingsTableData.data = this.transformData(this.apiData);
    }
  }

  public transformData(apiData: ApiResponse): FiatHolding[] {
    const fiats = apiData.configuration.supportFIATs;

    const totalsInvested = this.calculateTotals(apiData.stats.symbols);

    const holdingsData: FiatHolding[] = apiData.common.accountInfo.balances
    .filter(balance => fiats.includes(balance.asset))
    .map(balance => {
      const totalLiquid = +balance.locked + +balance.free;
      const totalInvested = totalsInvested[balance.asset] || 0;

      return {
        icon: (balance.asset + '.png').toLowerCase().replace('up', '').replace('down', ''),
        name: balance.asset,
        liquid: totalLiquid,
        coin: totalInvested,
        total: totalLiquid + totalInvested
      };
    });

    return holdingsData;
  }


  private calculateTotals(priceSymbols: PriceSymbol[]): { [key: string]: number } {
    const totals: { [key: string]: number; } = {};

    priceSymbols
    .filter(currSymbol => currSymbol.baseAssetBalance.estimatedValue !== 0)
    .map(currSymbol => ({
      baseCurrency:  currSymbol.quoteAssetBalance.asset,
      ...currSymbol.baseAssetBalance
    }))
    .forEach(balance => {
      if (totals[balance.baseCurrency]) {
        totals[balance.baseCurrency] = totals[balance.baseCurrency] + balance.estimatedValue;
      }
      else {
        totals[balance.baseCurrency] = balance.estimatedValue;
      }
    });

    return totals;
  }
}
