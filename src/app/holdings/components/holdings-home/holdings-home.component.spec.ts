import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsHomeComponent } from './holdings-home.component';

describe('HoldingsHomeComponent', () => {
  let component: HoldingsHomeComponent;
  let fixture: ComponentFixture<HoldingsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
