import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './admin-service.service';

describe('AdminUserServiceService', () => {
  let service: AdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
