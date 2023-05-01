import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProppertyBindingComponent } from './propperty-binding.component';

describe('ProppertyBindingComponent', () => {
  let component: ProppertyBindingComponent;
  let fixture: ComponentFixture<ProppertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProppertyBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProppertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
