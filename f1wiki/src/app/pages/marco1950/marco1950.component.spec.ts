import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marco1950Component } from './marco1950.component';

describe('Marco1950Component', () => {
  let component: Marco1950Component;
  let fixture: ComponentFixture<Marco1950Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marco1950Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marco1950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
