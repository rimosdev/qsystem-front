import { TestBed } from '@angular/core/testing';

import { DataTablesService } from './data-tables.service';

describe('DataTablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTablesService = TestBed.get(DataTablesService);
    expect(service).toBeTruthy();
  });
});
