import { Component, OnDestroy } from '@angular/core';
import { ApiResponse } from '../../shared/models/apiResponse';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnDestroy {
  public hasData = false;
  public hideZeroBalances = true;
  public destroy$ = new Subject();

  // TODO: Move to seperate module + pass data through

  constructor(private accountService: AccountService) {
    this.accountService.apiResponse$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.hasData = !!data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
