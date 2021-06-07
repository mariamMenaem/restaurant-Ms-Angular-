import { TestBed } from '@angular/core/testing';

import { ListRestoService } from './list-resto.service';

describe('ListRestoService', () => {
  let service: ListRestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
