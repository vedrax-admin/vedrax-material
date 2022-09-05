import { TestBed } from '@angular/core/testing';

import { VedraxMaterialUtilityService } from './vedrax-material-utility.service';

describe('VedraxMaterialUtilityService', () => {
  let service: VedraxMaterialUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VedraxMaterialUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
