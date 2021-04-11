import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlOverviewComponent } from './pl-overview.component';

describe('PlOverviewComponent', () => {
  let component: PlOverviewComponent;
  let fixture: ComponentFixture<PlOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
