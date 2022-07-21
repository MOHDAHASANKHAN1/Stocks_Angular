import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativesIndexComponent } from './derivatives-index.component';

describe('DerivativesIndexComponent', () => {
  let component: DerivativesIndexComponent;
  let fixture: ComponentFixture<DerivativesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
