import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhlComponent } from './ohl.component';

describe('OhlComponent', () => {
  let component: OhlComponent;
  let fixture: ComponentFixture<OhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
