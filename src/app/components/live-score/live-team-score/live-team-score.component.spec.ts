import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTeamScoreComponent } from './live-team-score.component';

describe('LiveTeamScoreComponent', () => {
  let component: LiveTeamScoreComponent;
  let fixture: ComponentFixture<LiveTeamScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTeamScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTeamScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
