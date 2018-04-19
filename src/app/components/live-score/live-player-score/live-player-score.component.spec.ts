import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlayerScoreComponent } from './live-player-score.component';

describe('LivePlayerScoreComponent', () => {
  let component: LivePlayerScoreComponent;
  let fixture: ComponentFixture<LivePlayerScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePlayerScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePlayerScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
