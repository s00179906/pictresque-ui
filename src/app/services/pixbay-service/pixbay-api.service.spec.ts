import { TestBed } from '@angular/core/testing';

import { PixbayApiService } from './pixbay-api.service';

describe('PixbayApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PixbayApiService = TestBed.get(PixbayApiService);
    expect(service).toBeTruthy();
  });
});
