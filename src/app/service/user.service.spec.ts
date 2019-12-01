import { TestBed } from '@angular/core/testing';

import { UsermyfireService } from './user.service';

describe('UsermyfireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsermyfireService = TestBed.get(UsermyfireService);
    expect(service).toBeTruthy();
  });
});
