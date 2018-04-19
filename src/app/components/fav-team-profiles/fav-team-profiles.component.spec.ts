import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTeamProfilesComponent } from './fav-team-profiles.component';

describe('FavTeamProfilesComponent', () => {
  let component: FavTeamProfilesComponent;
  let fixture: ComponentFixture<FavTeamProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavTeamProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavTeamProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
