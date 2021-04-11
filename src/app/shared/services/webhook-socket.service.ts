import { Injectable } from '@angular/core';
import { ApiPayload, ApiResponse } from '../models/apiResponse';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { Observable, Subject, timer } from 'rxjs';
import { environment } from '../../../environments/environment';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebhookSocketService {
  private readonly socket$: WebSocketSubject<ApiPayload | ApiResponse>;
  private _pollDestroy$ = new Subject();

  private _messages$ = new Subject<ApiResponse>();
  private _latestPollData$ = new Subject<ApiResponse | undefined>();

  constructor() {
    this.socket$ = new WebSocketSubject(environment.wsEndpoint);
    this.socket$.subscribe(
      (data) => this._messages$.next(data as ApiResponse),
      (err) => this._messages$.error(err),
      () => this._messages$.complete()
    );

    this.messageListener();
  }

  public startPolling(): void {
    timer(0, 1000).pipe(
      takeUntil(this._pollDestroy$)
    ).subscribe(() => {
      this.sendMessage({command: 'latest', data: {}});
    });
  }

  public stopPolling(): void {
    this._pollDestroy$.next();
  }

  private messageListener(): void {
    this._messages$.subscribe((data) => {
      if (data.result) {
        switch (data.type) {
          case 'latest':
            this._latestPollData$.next(data);
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

  sendMessage(msg: ApiPayload): void {
    if (this.socket$) {
      this.socket$.next(msg);
    } else {
      console.error('Socket not opened!');
    }
  }

  public close(): void {
    if (this.socket$) {
      this._pollDestroy$.next();
      this.socket$.complete();
    } else {
      console.error('Socket is not opened! Ignoring close command!');
    }
  }

  get latestPollData$(): Observable<ApiResponse | undefined> {
    return this._latestPollData$.asObservable();
  }
}
