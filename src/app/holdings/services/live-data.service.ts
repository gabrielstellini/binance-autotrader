import { Injectable } from '@angular/core';
import { WebhookSocketService } from './webhook-socket.service';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {
  private destroy$ = new Subject();
  private latestPollData$ = new Subject<ApiResponse>();

  constructor(private ws: WebhookSocketService) {
    this.destroy$.subscribe(() => this.ws.close());
  }

  public startPolling(): void {
      timer(0, 1000).pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.ws.sendMessage({command: 'latest', data: {}});
      });

      this.ws.messages$.subscribe((data) => {
        if (data.result) {
          switch (data.type) {
            case 'latest':
              this.latestPollData$.next(data);
              break;
            case 'connection_success':
              console.log('Successfully Connected!');
              break;
            default:
              console.warn('Unexpected message recieved:', data);
          }
        }
      });
  }

  public get latestPollData(): Observable<ApiResponse> {
    return this.latestPollData$.asObservable();
  }

  public close(): void {
    this.destroy$.next();
  }
}
