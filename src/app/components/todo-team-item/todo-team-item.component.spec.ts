import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTeamItemComponent } from './todo-team-item.component';

describe('TodoTeamItemComponent', () => {
  let component: TodoTeamItemComponent;
  let fixture: ComponentFixture<TodoTeamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTeamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTeamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
