import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktorAuthentifizierungComponent } from './faktor-authentifizierung.component';

describe('FaktorAuthentifizierungComponent', () => {
  let component: FaktorAuthentifizierungComponent;
  let fixture: ComponentFixture<FaktorAuthentifizierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktorAuthentifizierungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaktorAuthentifizierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
