import { TestBed } from '@angular/core/testing';

import { CircuitosService } from './circuitos.service';

describe('CircuitosService', () => {
  let service: CircuitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircuitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
