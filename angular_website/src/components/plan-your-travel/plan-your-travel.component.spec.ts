import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYourTravelComponent } from './plan-your-travel.component';

describe('PlanYourTravelComponent', () => {
  let component: PlanYourTravelComponent;
  let fixture: ComponentFixture<PlanYourTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanYourTravelComponent]
    });
    fixture = TestBed.createComponent(PlanYourTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
