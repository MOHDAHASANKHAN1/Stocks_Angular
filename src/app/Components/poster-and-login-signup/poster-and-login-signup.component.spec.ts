import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterAndLoginSignupComponent } from './poster-and-login-signup.component';

describe('PosterAndLoginSignupComponent', () => {
  let component: PosterAndLoginSignupComponent;
  let fixture: ComponentFixture<PosterAndLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterAndLoginSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterAndLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
