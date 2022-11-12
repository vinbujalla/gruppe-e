import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInFensterComponent } from './log-in-fenster.component';

describe('LogInFensterComponent', () => {
  let component: LogInFensterComponent;
  let fixture: ComponentFixture<LogInFensterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInFensterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInFensterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
