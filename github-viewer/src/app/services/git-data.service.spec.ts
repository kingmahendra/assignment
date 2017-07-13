import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GitDataService } from './git-data.service';

describe('GitDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [GitDataService]
    });
  });

  it('should be created', inject([GitDataService], (service: GitDataService) => {
    expect(service).toBeTruthy();
  }));
});
