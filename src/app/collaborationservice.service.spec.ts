import { TestBed } from '@angular/core/testing';

import { CollaborationserviceService } from './collaborationservice.service';

describe('CollaborationserviceService', () => {
  let service: CollaborationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollaborationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
