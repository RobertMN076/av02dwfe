import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marco1972Component } from './marco1972.component';

describe('Marco1972Component', () => {
  let component: Marco1972Component;
  let fixture: ComponentFixture<Marco1972Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marco1972Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marco1972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
