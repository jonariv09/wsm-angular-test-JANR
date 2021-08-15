import { TestBed } from '@angular/core/testing';

import { ItemVariantsService } from './item-variants.service';

describe('ItemVariantsService', () => {
  let service: ItemVariantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemVariantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
