import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApiResponse } from '../../../../shared/models/apiResponse';
import { MatTableDataSource } from '@angular/material/table';
import { FiatHolding, FiatTotals } from '../../../../shared/models/view.model';
import { AccountService } from '../../../../shared/services/account.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-fiat-holdings',
  templateUrl: './fiat-holdings.component.html',
  styleUrls: ['./fiat-holdings.component.scss']
})
export class FiatHoldingsComponent implements AfterViewInit {
  @ViewChild(MatSort, { static: true }) private sort?: MatSort;
  @Input() hideZeroBalances = true;

  public apiData?: ApiResponse;

  holdingsTableData = new MatTableDataSource<FiatHolding>([] as FiatHolding[]);
  displayedColumns: string[] = [
    'icon',
    'baseFiat',
    'liquid',
    'coin',
    'total'
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

  public transformData(apiData: ApiResponse, totalsInvested: FiatTotals): FiatHolding[] {
    const fiats = apiData.configuration.supportFIATs;

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
}
