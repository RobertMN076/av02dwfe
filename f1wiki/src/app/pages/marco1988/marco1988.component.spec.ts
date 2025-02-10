import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marco1988Component } from './marco1988.component';

describe('Marco1988Component', () => {
  let component: Marco1988Component;
  let fixture: ComponentFixture<Marco1988Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marco1988Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marco1988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
