import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatHoldingsComponent } from './fiat-holdings.component';

describe('FiatHoldingsComponent', () => {
  let component: FiatHoldingsComponent;
  let fixture: ComponentFixture<FiatHoldingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiatHoldingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiatHoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
