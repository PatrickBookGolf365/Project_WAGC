import { TestBed, inject } from '@angular/core/testing';

import { TodoTeamService } from './todo-team.service';

describe('TodoTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoTeamService]
    });
  });

  it('should be created', inject([TodoTeamService], (service: TodoTeamService) => {
    expect(service).toBeTruthy();
  }));
});
