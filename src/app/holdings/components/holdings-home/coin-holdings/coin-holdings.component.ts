import { AfterViewInit, Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApiResponse } from '../../../../shared/models/apiResponse';
import { MatTableDataSource } from '@angular/material/table';
import { CoinHolding, FiatTotals } from '../../../../shared/models/view.model';
import { crptoCurrencies } from '../../../../../assets/data/cryptocurrencies';
import { AccountService } from '../../../../shared/services/account.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-coin-holdings',
  templateUrl: './coin-holdings.component.html',
  styleUrls: ['./coin-holdings.component.scss']
})
export class CoinHoldingsComponent implements AfterViewInit {
  @ViewChild(MatSort, { static: true }) private sort?: MatSort;
  @Input() hideZeroBalances = true;

  holdingsTableData = new MatTableDataSource([] as CoinHolding[]);
  displayedColumns: string[] = [
    'icon',
    'name',
    'baseFiat',
    'percentage',
    'amountInCoin',
    'amountInFiat'
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

  ngAfterViewInit(): void {
    if (this.sort) {
      this.holdingsTableData.sort = this.sort;
    }
  }

  public transformData(apiData: ApiResponse, totalsInvested: FiatTotals): CoinHolding[] {
    return apiData.stats.symbols
    .map(symbol => {
      const totalBaseFiat = +symbol.quoteAssetBalance.free +
        +symbol.quoteAssetBalance.locked +
        totalsInvested[symbol.quoteAssetBalance.asset];
      const coinKey = (symbol.baseAssetBalance.asset.toUpperCase()) as keyof typeof crptoCurrencies;
      const totalSymbolHolding = symbol.baseAssetBalance.total;
      const imageName = (coinKey + '.png').toLowerCase().replace('up', '').replace('down', '');
      const coinName = crptoCurrencies[coinKey] ? `${crptoCurrencies[coinKey]} / ${coinKey}` : `${coinKey}`;

      const rowData: CoinHolding = {
        icon: imageName,
        name: coinName,
        baseFiat: symbol.quoteAssetBalance.asset,
        percentage: symbol.baseAssetBalance.estimatedValue / totalBaseFiat,
        amountInCoin: totalSymbolHolding,
        amountInFiat: {
          currency: symbol.quoteAssetBalance.asset,
          amount: symbol.baseAssetBalance.estimatedValue
        }
      };
      return rowData;
    });
  }
}
