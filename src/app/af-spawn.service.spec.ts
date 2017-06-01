import { TestBed, inject } from '@angular/core/testing';

import { AFSpawnService } from './af-spawn.service';

describe('AFSpawnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AFSpawnService]
    });
  });

  it('should ...', inject([AFSpawnService], (service: AFSpawnService) => {
    expect(service).toBeTruthy();
  }));
});
