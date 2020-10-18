import { TestBed } from '@angular/core/testing';

import { TaskApiClientService } from './task-api-client.service';

describe('TaskApiClientService', () => {
  let service: TaskApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
