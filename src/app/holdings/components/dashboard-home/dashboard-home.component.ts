import { Component, OnDestroy } from '@angular/core';
import { ApiResponse } from '../../models/apiResponse';
import { Subject } from 'rxjs';
import { LiveDataService } from '../../services/live-data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnDestroy {
  public apiData?: ApiResponse;
  public hideZeroBalances = true;
  public destroy$ = new Subject();

  // TODO: Move to seperate module + pass data through

  constructor(private liveDataService: LiveDataService) {
    this.liveDataService.startPolling();
    this.liveDataService.latestPollData.pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.apiData = data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.liveDataService.close();
  }
}
