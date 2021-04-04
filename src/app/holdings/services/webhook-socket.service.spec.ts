import { TestBed } from '@angular/core/testing';

import { WebhookSocketService } from './webhook-socket.service';

describe('WebhookSocketService', () => {
  let service: WebhookSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebhookSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
