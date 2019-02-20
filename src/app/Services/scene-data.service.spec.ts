import { TestBed } from '@angular/core/testing';

import { SceneDataService } from './scene-data.service';

describe('SceneDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SceneDataService = TestBed.get(SceneDataService);
    expect(service).toBeTruthy();
  });
});
