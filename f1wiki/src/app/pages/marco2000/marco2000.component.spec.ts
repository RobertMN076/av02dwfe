import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marco2000Component } from './marco2000.component';

describe('Marco2000Component', () => {
  let component: Marco2000Component;
  let fixture: ComponentFixture<Marco2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marco2000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marco2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
