import { Component, OnDestroy } from '@angular/core';
import { LiveDataService } from '../../../shared/services/live-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiResponse } from '../../models/apiResponse';

@Component({
  selector: 'app-holdings-home',
  templateUrl: './holdings-home.component.html',
  styleUrls: ['./holdings-home.component.scss']
})
export class HoldingsHomeComponent implements OnDestroy {
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
