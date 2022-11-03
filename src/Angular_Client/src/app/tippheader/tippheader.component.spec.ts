import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIPPHeaderComponent } from './tippheader.component';

describe('TIPPHeaderComponent', () => {
  let component: TIPPHeaderComponent;
  let fixture: ComponentFixture<TIPPHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TIPPHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TIPPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
