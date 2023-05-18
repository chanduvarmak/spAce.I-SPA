import { TestBed } from '@angular/core/testing';

import { SpaceiService } from './spacei.service';

describe('SpaceiService', () => {
  let service: SpaceiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
