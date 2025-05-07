import { TestBed } from '@angular/core/testing';

import { ApiJSONService } from './api-json.service';

describe('ApiJSONService', () => {
  let service: ApiJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
