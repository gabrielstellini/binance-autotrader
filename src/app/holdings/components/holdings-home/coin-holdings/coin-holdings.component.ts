import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApiResponse } from '../../../models/apiResponse';
import { MatTableDataSource } from '@angular/material/table';
import { CoinHolding } from '../../../models/view.model';
import { crptoCurrencies } from '../../../../../assets/data/cryptocurrencies';

@Component({
  selector: 'app-coin-holdings',
  templateUrl: './coin-holdings.component.html',
  styleUrls: ['./coin-holdings.component.scss']
})
export class CoinHoldingsComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatSort, { static: true }) private sort?: MatSort;
  @Input() apiData?: ApiResponse;
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

  public transformData(apiData: ApiResponse): CoinHolding[] {
    const holdingsData: CoinHolding[] = apiData.stats.symbols.map(symbol => {
      const totalBaseFiat = +symbol.quoteAssetBalance.free + +symbol.quoteAssetBalance.locked;
      const coinKey = (symbol.baseAssetBalance.asset.toUpperCase()) as keyof typeof crptoCurrencies;
      const totalSymbolHolding = symbol.baseAssetBalance.total;
      const imageName = (coinKey + '.png').toLowerCase().replace('up', '').replace('down', '');
      const coinName = crptoCurrencies[coinKey] ? `${crptoCurrencies[coinKey]} / ${coinKey}` : `${coinKey}`;

      const rowData: CoinHolding = {
        icon: imageName,
        name: coinName,
        baseFiat: symbol.quoteAssetBalance.asset,
        // TODO: Include invested in this total percentage
        percentage: symbol.baseAssetBalance.estimatedValue / totalBaseFiat,
        amountInCoin: totalSymbolHolding,
        amountInFiat: {
          currency: symbol.quoteAssetBalance.asset,
          amount: symbol.baseAssetBalance.estimatedValue
        }
      };
      return rowData;
    });

    return holdingsData;
  }
}
