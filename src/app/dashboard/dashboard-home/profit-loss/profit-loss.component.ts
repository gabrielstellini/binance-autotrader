import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FiatTotals, ProfitLoss } from '../../../shared/models/view.model';
import { AccountService } from '../../../shared/services/account.service';
import { combineLatest } from 'rxjs';
import { ApiResponse } from '../../../shared/models/apiResponse';
import { crptoCurrencies } from '../../../../assets/data/cryptocurrencies';
import { rowsAnimation } from '../../../shared/animations/template.animations';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss'],
  animations: [
    rowsAnimation,
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class ProfitLossComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) private sort?: MatSort;
  @Input() hideZeroBalances = true;

  holdingsTableData = new MatTableDataSource([] as ProfitLoss[]);
  expandedElement: string | null = null;
  displayedColumns: string[] = [
    'icon',
    'name',
    'absolutePrice',
    'buyDifference',
    'sellDifference',
    'profitLoss',
    'totalAmount'
  ];

  setExpandedElement(row: ProfitLoss): void {
    this.expandedElement = this.expandedElement === row.name ? null : row.name;
  }

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

  trackingFn(_index: number, item: ProfitLoss): string {
    return item.icon + item.sell.currentProfit;
  }

  ngOnInit(): void {
    if (this.sort) {
      this.holdingsTableData.sort = this.sort;
      this.holdingsTableData.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'profitLoss': return item.sell.currentProfitPercentage || 0;
          case 'buyDifference': return item.buy.difference || 0;
          case 'sellDifference': return item.sell.difference || 0;
          default: return item.name;
        }
      };
    }
  }

  public transformData(apiData: ApiResponse, totalsInvested: FiatTotals): ProfitLoss[] {
    const holdingsData: ProfitLoss[] = apiData.stats.symbols.map(symbolData => {
      const coinKey = (symbolData.baseAssetBalance.asset.toUpperCase()) as keyof typeof crptoCurrencies;
      const imageName = (coinKey + '.png').toLowerCase().replace('up', '').replace('down', '');
      const coinName = crptoCurrencies[coinKey] ? `${crptoCurrencies[coinKey]} / ${coinKey}` : `${coinKey}`;

      const rowData: ProfitLoss = {
        icon: imageName,
        name: coinName,
        buy: symbolData.buy,
        sell: symbolData.sell,
        status: symbolData.symbolInfo.status,
        totalAmountInFiat: {
          currency: symbolData.quoteAssetBalance.asset === 'USDT' ? 'USD' : symbolData.quoteAssetBalance.asset,
          amount: symbolData.baseAssetBalance.estimatedValue
        }
      };
      return rowData;
    });

    return holdingsData;
  }
}
