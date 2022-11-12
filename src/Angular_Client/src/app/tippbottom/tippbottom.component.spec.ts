import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippbottomComponent } from './tippbottom.component';

describe('TippbottomComponent', () => {
  let component: TippbottomComponent;
  let fixture: ComponentFixture<TippbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippbottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TippbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
