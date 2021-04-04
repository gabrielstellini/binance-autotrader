import { Injectable } from '@angular/core';
import { ApiPayload, ApiResponse } from '../../holdings/models/apiResponse';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebhookSocketService {
  private readonly socket$: WebSocketSubject<ApiPayload | ApiResponse>;
  private messagesSubject$ = new Subject<ApiResponse>();

  constructor() {
    this.socket$ = new WebSocketSubject(environment.wsEndpoint);
    const messages = this.socket$.subscribe(
      (data) => this.messagesSubject$.next(data as ApiResponse),
      (err) => this.messagesSubject$.error(err),
      () => this.messagesSubject$.complete()
    );
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
      this.socket$.complete();
    } else {
      console.error('Socket is not opened! Ignoring close command!');
    }
  }

  get messages$(): Observable<ApiResponse> {
    return this.messagesSubject$.asObservable();
  }
}
