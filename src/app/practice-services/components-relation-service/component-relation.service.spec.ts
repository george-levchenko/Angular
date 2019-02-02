import { TestBed } from '@angular/core/testing';

import { ComponentRelationService } from './component-relation.service';

describe('ComponentRelationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentRelationService = TestBed.get(ComponentRelationService);
    expect(service).toBeTruthy();
  });
});
