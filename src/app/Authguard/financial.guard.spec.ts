import { TestBed, async, inject } from '@angular/core/testing';

import { FinancialGuard } from './financial.guard';

describe('FinancialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialGuard]
    });
  });

  it('should ...', inject([FinancialGuard], (guard: FinancialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
