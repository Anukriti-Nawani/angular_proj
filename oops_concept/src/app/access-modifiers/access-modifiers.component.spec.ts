import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessModifiersComponent } from './access-modifiers.component';

describe('AccessModifiersComponent', () => {
  let component: AccessModifiersComponent;
  let fixture: ComponentFixture<AccessModifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessModifiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
