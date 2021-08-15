import { TestBed } from '@angular/core/testing';

import { InstructionOptimizationService } from './instruction-optimization.service';

describe('InstructionOptimizationService', () => {
  let service: InstructionOptimizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructionOptimizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
