import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSliderComponent } from './more-slider.component';

describe('MoreSliderComponent', () => {
  let component: MoreSliderComponent;
  let fixture: ComponentFixture<MoreSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
