import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScheduleComponent } from './game-schedule.component';

describe('GameScheduleComponent', () => {
  let component: GameScheduleComponent;
  let fixture: ComponentFixture<GameScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
