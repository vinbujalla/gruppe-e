import { TestBed } from '@angular/core/testing';

import { GeneralUserServiceService } from './generaluser-service.service';

describe('GeneralUserServiceService', () => {
  let service: GeneralUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
