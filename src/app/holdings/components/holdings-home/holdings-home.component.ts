import { Component, OnDestroy } from '@angular/core';
import { ApiResponse } from '../../../shared/models/apiResponse';
import { AccountService } from '../../../shared/services/account.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-holdings-home',
  templateUrl: './holdings-home.component.html',
  styleUrls: ['./holdings-home.component.scss']
})
export class HoldingsHomeComponent implements OnDestroy {
  public hasData = false;
  public hideZeroBalances = true;
  destroy$ = new Subject();

  constructor(private accountService: AccountService) {
    accountService.apiResponse$
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => this.hasData = !!data);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
