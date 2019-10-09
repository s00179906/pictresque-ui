import { TestBed } from '@angular/core/testing';

import { PictresqueAPIService } from './pictresque-api.service';

describe('PictresqueAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictresqueAPIService = TestBed.get(PictresqueAPIService);
    expect(service).toBeTruthy();
  });
});
