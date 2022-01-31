import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('2+3 should be 5', () => {
    expect(service.add(2,3)).toBe(5);
  });

  it('-2+-3 should be -5', () => {
    expect(service.add(-2,-3)).toBe(-5);
  });
});
