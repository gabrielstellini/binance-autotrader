import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { WebhookSocketService } from './webhook-socket.service';
import { takeUntil } from 'rxjs/operators';
import { ApiResponse, PriceSymbol } from '../models/apiResponse';
import { FiatTotals } from '../models/view.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _destroy$ = new Subject();
  private _fiatTotals$ = new ReplaySubject<FiatTotals | undefined>();
  private _apiResponse$ = new ReplaySubject<ApiResponse | undefined>();

  constructor(private ws: WebhookSocketService) {
    this._destroy$.subscribe(() => this.ws.close());

    this.ws.startPolling();
    this.ws.latestPollData$.pipe(
      takeUntil(this._destroy$)
    ).subscribe((apiData) => {
      this._apiResponse$.next(apiData);
      if (apiData) {
        const totals = this.calculateTotals(apiData.stats.symbols);
        this._fiatTotals$.next(totals);
      } else {
        this._fiatTotals$.next(undefined);
      }
    });
  }

  private calculateTotals(priceSymbols: PriceSymbol[]): FiatTotals {
    const totals: FiatTotals = {};

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

  public get fiatTotals$(): Observable<FiatTotals | undefined> {
    return this._fiatTotals$.asObservable();
  }

  public get apiResponse$(): Observable<ApiResponse | undefined> {
    return this._apiResponse$.asObservable();
  }

  public close(): void {
    this._destroy$.next();
  }
}


