import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marco2021Component } from './marco2021.component';

describe('Marco2021Component', () => {
  let component: Marco2021Component;
  let fixture: ComponentFixture<Marco2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marco2021Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marco2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
