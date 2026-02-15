import { TestBed } from '@angular/core/testing';

import { TablePaginatorbasicDemoService } from './table-paginatorbasic-demo.service';

describe('TablePaginatorbasicDemoService', () => {
  let service: TablePaginatorbasicDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePaginatorbasicDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
