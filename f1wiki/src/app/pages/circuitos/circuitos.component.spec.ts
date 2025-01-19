import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitosComponent } from './circuitos.component';

describe('CircuitosComponent', () => {
  let component: CircuitosComponent;
  let fixture: ComponentFixture<CircuitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
