import { TestBed, inject } from '@angular/core/testing';

import { SpawnService } from './spawn.service';

describe('SpawnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpawnService]
    });
  });

  it('should ...', inject([SpawnService], (service: SpawnService) => {
    expect(service).toBeTruthy();
  }));
});
