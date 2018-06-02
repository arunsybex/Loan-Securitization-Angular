import { TestBed, async, inject } from '@angular/core/testing';

import { MetamaskGuard } from './metamask.guard';

describe('MetamaskGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetamaskGuard]
    });
  });

  it('should ...', inject([MetamaskGuard], (guard: MetamaskGuard) => {
    expect(guard).toBeTruthy();
  }));
});
