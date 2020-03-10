import { TestBed } from '@angular/core/testing';

import { MyDesignLibService } from './my-design-lib.service';

describe('MyDesignLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDesignLibService = TestBed.get(MyDesignLibService);
    expect(service).toBeTruthy();
  });
});
