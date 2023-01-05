import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppState } from '../app-state';

import { EventsService } from './events-service.service';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppState,
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
