import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgnlComponent } from './tgnl.component';

describe('TgnlComponent', () => {
  let component: TgnlComponent;
  let fixture: ComponentFixture<TgnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgnlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
