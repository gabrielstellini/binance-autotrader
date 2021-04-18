import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FiatTotals, ProfitLossSummary } from '../../../shared/models/view.model';
import { AccountService } from '../../../shared/services/account.service';
import { combineLatest } from 'rxjs';
import { ApiResponse } from '../../../shared/models/apiResponse';
import { rowsAnimation } from '../../../shared/animations/template.animations';

@Component({
  selector: 'app-profit-loss-summary',
  templateUrl: './profit-loss-summary.component.html',
  styleUrls: ['./profit-loss-summary.component.scss'],
  animations: [rowsAnimation]
})
export class ProfitLossSummaryComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) private sort?: MatSort;
  @Input() hideZeroBalances = true;

  holdingsTableData = new MatTableDataSource([] as ProfitLossSummary[]);
  displayedColumns: string[] = [
    'icon',
    'name',
    'profitLoss',
    'totalAmount'
  ];

  constructor(accountService: AccountService) {
    combineLatest([
      accountService.apiResponse$,
      accountService.fiatTotals$
    ]).subscribe(([apiData, totals]) => {
      if (apiData && totals) {
        this.holdingsTableData.data = this.transformData(apiData, totals);
      } else {
        this.holdingsTableData.data = [];
      }
    });

  }

  ngOnInit(): void {
    if (this.sort) {
      this.holdingsTableData.sort = this.sort;
      this.holdingsTableData.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'name': return item.name;
          case 'profitLoss': return item.unrealizedProfit || 0;
          case 'totalAmount': return item.totalAmountInFiat || 0;
          default: return item.name;
        }
      };
    }
  }

  trackingFn(_index: number, item: ProfitLossSummary): string {
    return item.name + item.unrealizedProfit;
  }

  public transformData(apiData: ApiResponse, totalsInvested: FiatTotals): ProfitLossSummary[] {
    const initialValue: { [currency: string]: ProfitLossSummary } = {};

    const transformedData = apiData.stats.symbols.reduce((acc, symbolData) => {
      const currency = symbolData.quoteAssetBalance.asset === 'USDT' ? 'USD' : symbolData.quoteAssetBalance.asset;
      const imageName = (currency + '.png').toLowerCase().replace('up', '').replace('down', '');

      return ({
        ...acc,
        [currency]: {
          icon: imageName,
          name: currency,
          unrealizedProfit: (symbolData.sell?.currentProfit || 0) + (acc[currency]?.unrealizedProfit || 0),
          totalAmountInFiat: totalsInvested[symbolData.quoteAssetBalance.asset]
        }
      });
    }, initialValue);

    return Object.values(transformedData);
  }
}
