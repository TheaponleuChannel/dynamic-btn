import { TestBed } from '@angular/core/testing';

import { DynamicBtnService } from './dynamic-btn.service';

describe('DynamicBtnService', () => {
  let service: DynamicBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
