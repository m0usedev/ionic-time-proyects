import { TestBed } from '@angular/core/testing';

import { ListProyectsService } from './list-proyects.service';

describe('ListProyectsService', () => {
  let service: ListProyectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProyectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
