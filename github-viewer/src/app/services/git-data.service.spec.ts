import { TestBed, inject } from '@angular/core/testing';

import { GitDataService } from './git-data.service';

describe('GitDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitDataService]
    });
  });

  it('should be created', inject([GitDataService], (service: GitDataService) => {
    expect(service).toBeTruthy();
  }));
});
